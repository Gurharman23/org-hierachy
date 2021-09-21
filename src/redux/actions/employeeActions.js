import * as employeeApi from "../../api/employeesApi";
import {
  DELETE_EMPLOYEE_SUCESS,
  LOAD_EMPLOYEES_SUCCESS,
  SAVE_EMPLOYEE_SUCCESS,
  UPDATE_EMPLOYEE_SUCCESS,
} from "./actionConstants";

function loadEmployeesSuccess(employees) {
  return {
    type: LOAD_EMPLOYEES_SUCCESS,
    employees,
  };
}
function saveEmployeeSuccess(employee) {
  return {
    type: SAVE_EMPLOYEE_SUCCESS,
    employee,
  };
}
function updateEmployeeSuccess(employee) {
  return {
    type: UPDATE_EMPLOYEE_SUCCESS,
    employee,
  };
}
function deleteEmployeeSuccess(employee) {
  return {
    type: DELETE_EMPLOYEE_SUCESS,
    employee,
  };
}

//  thunks
export function loadEmployees() {
  return (dispatcher) => {
    return employeeApi.getEmployees().then((employees) => {
      return dispatcher(loadEmployeesSuccess(employees));
    });
  };
}
export function saveEmployee(employee, id) {
  return (dispatcher) => {
    return employeeApi.saveEmployee(employee).then((employee) => {
      return dispatcher(saveEmployeeSuccess(employee));
    });
  };
}
export function updateEmployee(employee, id) {
  return (dispatcher) => {
    return employeeApi.updateEmployee(employee).then((employee) => {
      return dispatcher(updateEmployeeSuccess(employee));
    });
  };
}
export function deleteEmployee(employee, id) {
  return (dispatcher) => {
    return employeeApi.deleteEmployee(employee).then(() => {
      return dispatcher(deleteEmployeeSuccess(employee));
    });
  };
}
