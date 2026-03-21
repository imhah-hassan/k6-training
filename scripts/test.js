import http from 'k6/http';
import { sleep } from 'k6';

const config = JSON.parse(open('../config.json'));
const env = __ENV.TARGET_ENV || 'local'; // Default to local
const settings = config[env];
console.log(`Running tests against environment: ${env}`);
console.log(`Host: ${settings}`);
const HOST = settings.host;
const BASE_URL = settings.baseUrl;
const USERNAME = settings.username;
const PASSWORD = settings.password;


export default function () {
  let response = http.get(`${BASE_URL}`);
  console.log(`Visited ${HOST}`);
  console.log(`Response status: ${response.status}`);
  sleep(10); // Simulate a user waiting for 1 second before making the next request
}