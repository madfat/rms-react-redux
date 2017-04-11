import * as types from '../actions/actionTypes';
import intialState from './initialState';

export default function employeeReducer(state = intialState.employees, action) {
  switch (action.type) {
    case types.LOAD_EMPLOYEE_LIST_SUCCESS:
      return action.employees ;
    
    case types.FIND_EMPLOYEE_BY_NAME:
      return action.employees;

    case types.FIND_EMPLOYEES_BY_FILTER:
      return action.employees;

    default:
      return state;
  }
}