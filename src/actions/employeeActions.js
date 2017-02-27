import * as types from './actionTypes';
import axios from 'axios';

export function loadEmployeeListSuccess(employees) {
  return {type: types.LOAD_EMPLOYEE_LIST_SUCCESS, employees}
}

