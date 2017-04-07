import * as types from '../actions/actionTypes';
import intialState from './initialState';

export default function openDialogReducer(state = intialState.openDialog, action) {
  switch (action.type) {
    case types.OPEN_FILTER_DIALOG:
      return action.openFilter;

    default:
      return state;
  }
}