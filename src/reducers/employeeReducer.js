import * as types from '../actions/actionTypes';
import intialState from './initialState';

export default function employeeReducer(state = intialState.employees, action) {
  switch (action.type) {
    case types.LOAD_EMPLOYEE_LIST_SUCCESS:
      return action.employees ;
    case types.UPDATE_EMPLOYEE_LIST:
      return [
        ...state.filter((modifiedEmployee) => modifiedEmployee.id !== action.modifiedEmployee.id), 
        Object.assign({}, action.modifiedEmployee)
      ];
    case types.ADD_EMPLOYEE_LIST:
      return[
        ...state, Object.assign({}, action.newEmployee)
      ]

    default:
      return state;
  }
}