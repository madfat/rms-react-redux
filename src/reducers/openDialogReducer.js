import * as types from '../actions/actionTypes';
import intialState from './initialState';

export default function openDialogReducer(state = intialState.openDialog, action) {
  switch (action.type) {
    case types.SET_OPEN_DIALOG:
      return action.openDialog;

    default:
      return state;
  }
}