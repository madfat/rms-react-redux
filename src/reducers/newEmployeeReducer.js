import * as types from '../actions/actionTypes';
import intialState from './initialState';

export default function newEmployeeReducer(state = intialState.newEmployee, action) {
  switch (action.type) {
    case types.SET_NEW_EMPLOYEE: 
      return action.newEmployee

    default:
      return state;
  }
}