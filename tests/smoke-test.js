import { sleep } from 'k6'
import { SharedArray } from 'k6/data';
import { login, viewPimModule, addEmployee, employeeContactDetails, deleteEmployee, logout } from '../modules/employee.js'
// 1. Définition du SharedArray (s'exécute en phase INIT)
const accountData = new SharedArray('employees', function () {
    // open() lit le fichier, JSON.parse() le transforme en objet JS
    const data = JSON.parse(open('../data/employees.json'));
    return data; 
});

export default function main() {
  // 2. Sélection de la donnée
  // On utilise le modulo (%) pour boucler sur le fichier si on a plus d'itérations que de comptes
  const currentIndex = __ITER % accountData.length;
  const employee = accountData[currentIndex];
  console.log(`VU ${__VU} - Iteration ${__ITER} : Ajout employee ${employee.firstName} ${employee.lastName}`);

  login();
  viewPimModule();
  const empNumber = addEmployee(employee);
  console.log ("Employee number : ", empNumber);
  employeeContactDetails(empNumber);
  deleteEmployee(empNumber);
  logout();
}

