import * as types from '../actions/actionTypes';
import intialState from './initialState';

export default function lookupReducer(state = intialState.lookup, action) {
  switch (action.type) {
    case types.LOAD_LOOKUP:
        const updatedLookup = Object.assign(state, {
            [action.lookup.data[0].dataType] : action.lookup.data
        });
        return updatedLookup;

    default:
      return state;
  }
}