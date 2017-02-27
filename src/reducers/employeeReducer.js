import * as types from '../actions/actionTypes';
import intialState from './initialState';

export default function employeeReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_EMPLOYEE_LIST_SUCCESS:
    //   return action.employees;
    return [...state,
      Object.assign({},action.employee)
    ];

    default:
      return state;
  }
}