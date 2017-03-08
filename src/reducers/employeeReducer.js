import * as types from '../actions/actionTypes';
import intialState from './initialState';

export default function employeeReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_EMPLOYEE_LIST_SUCCESS:
    //   return action.employees;
    return action.employees ;

    default:
      return state;
  }
}