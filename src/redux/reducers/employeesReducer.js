import {
  DELETE_EMPLOYEE_SUCESS,
  LOAD_EMPLOYEES_SUCCESS,
  SAVE_EMPLOYEE_SUCCESS,
  UPDATE_EMPLOYEE_SUCCESS,
} from "../actions/actionConstants";

export default function employeesReducer(state = [], action) {
  switch (action.type) {
    case LOAD_EMPLOYEES_SUCCESS:
      return action.employees;
    case SAVE_EMPLOYEE_SUCCESS:
      return [...state, action.employee];
    case UPDATE_EMPLOYEE_SUCCESS:
      return state.map((employee) =>
        employee.id === action.employee.id ? action.employee : employee
      );
    case DELETE_EMPLOYEE_SUCESS:
      return state.filter((employee) =>
        employee.id === action.employee.id ? false : true
      );
    default:
      return state;
  }
}
