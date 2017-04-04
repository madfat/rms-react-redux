import * as types from '../actions/actionTypes';
import intialState from './initialState';

export default function employeePagingReducer(state = intialState.paging, action) {
  switch (action.type) {
    case types.SET_EMPLOYEES_PAGING:
      return action.page ;

    default:
      return state;
  }
}