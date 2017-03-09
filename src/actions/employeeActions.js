import * as types from './actionTypes';
import axios from 'axios';
import dummyEmployee from '../dummyData/employees';

export function loadEmployeeListSuccess(employees) {
  return {
    type: types.LOAD_EMPLOYEE_LIST_SUCCESS, 
    employees // similar with employees: employees
  }
}

export function setCurrentEmployeeSuccess(currentEmployee) {
  return {
    type: types.SET_CURRENT_EMPLOYEE_SUCCESS,
    currentEmployee  // similar with currentEmployee: currentEmployee
  }
}

export function loadCurrentEmployeeSuccess(currentEmployee) {
  return {
    type: types.LOAD_CURRENT_EMPLOYEE_SUCCESS,
    currentEmployee
  }
}




export function loadEmployeeList(){
  return function(dispatch){
    dispatch(loadEmployeeListSuccess(dummyEmployee)); 
  }
}

export function setCurrentEmployee(employee){
  return function(dispatch){
    dispatch(setCurrentEmployeeSuccess(employee));
  }
}

export function loadCurrentEmployee(employee) {
  return function(dispatch) {
    dispatch(loadCurrentEmployeeSuccess(employee));
  }
}