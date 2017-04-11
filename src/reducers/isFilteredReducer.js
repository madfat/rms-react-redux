import * as types from '../actions/actionTypes';
import intialState from './initialState';

export default function isFilteredReducer(state = intialState.filtered, action) {
  switch (action.type) {
    case types.EMPLOYEES_FILTERED:
        return Object.assign(state, action.flag);

    default:
      return state;
  }
}