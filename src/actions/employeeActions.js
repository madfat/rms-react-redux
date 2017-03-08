import * as types from './actionTypes';
import axios from 'axios';
import dummyEmployee from '../dummyData/employees';

export function loadEmployeeListSuccess(employees) {
  return {type: types.LOAD_EMPLOYEE_LIST_SUCCESS, employees}
}

export function loadEmployeeList(){
      return loadEmployeeListSuccess(dummyEmployee); 
}