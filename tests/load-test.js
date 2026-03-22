import { SharedArray } from 'k6/data';
import { login, viewPimModule, addEmployee, employeeContactDetails, deleteEmployee, logout } from '../modules/employee.js'

// 1. Définition du SharedArray (s'exécute en phase INIT)
const accountData = new SharedArray('employees', function () {
    // open() lit le fichier, JSON.parse() le transforme en objet JS
    const data = JSON.parse(open('../data/employees.json'));
    return data; 
});

export const options = {
  scenarios: {
    login_logout: {
      executor: 'constant-vus',
      vus: 15,
      duration: '10m',
      exec: 'vu_login_logout',
    },
    add_employee: {
      executor: 'constant-vus',
      vus: 5,
      duration: '10m',
      exec: 'vu_add_employee',
    },
  },
  
  // Objectifs de performance (SLA)
  thresholds: {
    // 1. 95% des requêtes de CRÉATION doivent être sous 5 s
    'http_req_duration{scenario:add_employee}': ['p(95)<5000'],

    // 2. Le scénario de Login peut être un peu plus lent (10s)
    'http_req_duration{scenario:login_logout}': ['p(95)<10000'],

    // 3. Critère de santé global : moins de 1% d'erreurs HTTP (4xx ou 5xx) sur tout le test
    'http_req_failed': ['rate<0.01'], 
  },
};

export function vu_login_logout() {
  login();
  viewPimModule();
  logout();
}

export function vu_add_employee() {
  // 2. Sélection de la donnée
  // Modulo (%) pour boucler sur le fichier si on a plus d'itérations que de comptes
  const currentIndex = __ITER % accountData.length;
  const employee = accountData[currentIndex];

  console.log(`VU ${__VU} - Iteration ${__ITER} : Ajout employee ${employee.firstName} ${employee.lastName}`);
  
  login();
  viewPimModule();
  const empNumber = addEmployee(employee);
  console.log ("Employee number : ", empNumber);
  employeeContactDetails(empNumber);
  logout();
}


