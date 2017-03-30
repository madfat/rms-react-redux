import * as types from '../actions/actionTypes';
import intialState from './initialState';

export default function currentEmployeeReducer(state = intialState.currentEmployee, action) {
  switch (action.type) {
    case types.SET_CURRENT_EMPLOYEE_SUCCESS: 
      return action.currentEmployee;
    case types.EDIT_EMPLOYEE_SUCCESS:
      return action.updatedEmployee;

    default:
      return state;
  }
}