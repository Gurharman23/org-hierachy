import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/employees/";

export function getEmployees() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveEmployee(employee) {
  return fetch(baseUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...employee,
    }),
  })
    .then(handleResponse)
    .catch(handleError);
}
export function updateEmployee(employee) {
  return fetch(baseUrl + employee.id, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...employee,
    }),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteEmployee(employee) {
  return fetch(baseUrl + employee.id, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
