import * as types from '../actions/actionTypes';
import intialState from './initialState';

export default function currentEmployeeReducer(state = intialState.currentEmployee, action) {
  switch (action.type) {
    case types.SET_CURRENT_EMPLOYEE_SUCCESS: 
      return action.currentEmployee

    default:
      return state;
  }
}