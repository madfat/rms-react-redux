import * as types from './actionTypes';
import axios from 'axios';
import dummyEmployee from '../dummyData/employees';

export function loadEmployeeListSuccess(employees) {
  return {
    type: types.LOAD_EMPLOYEE_LIST_SUCCESS, 
    employees // similar with employees: employees
  }
}

export function updateEmployeeListSuccess(modifiedEmployee) {
  return {
    type: types.UPDATE_EMPLOYEE_LIST,
    modifiedEmployee
  }
}

export function addEmployeeListSuccess(newEmployee) {
  return {
    type: types.ADD_EMPLOYEE_LIST,
    newEmployee
  }
}

export function setCurrentEmployeeSuccess(currentEmployee) {
  return {
    type: types.SET_CURRENT_EMPLOYEE_SUCCESS,
    currentEmployee  // similar with currentEmployee: currentEmployee
  }
}


export function setOpenDialogSuccess(openDialog) {
  return {
    type: types.SET_OPEN_DIALOG,
    openDialog
  }
}

export function setNewEmployeeSuccess(newEmployee){
  return {
    type: types.SET_NEW_EMPLOYEE,
    newEmployee
  }
}


export function loadEmployeeList(){
  return function(dispatch){
    dispatch(loadEmployeeListSuccess(dummyEmployee)); 
  }
}

export function updateEmployeeList(newEmployee) {
  return function(dispatch) {
    dispatch(updateEmployeeListSuccess(newEmployee));
  }
}

export function setCurrentEmployee(employee){
  return function(dispatch){
    dispatch(setCurrentEmployeeSuccess(employee));
  }
}

export function setOpenDialog(openDialog){
  return function(dispatch) {
    dispatch(setOpenDialogSuccess(openDialog));
  }
}

export function setNewEmployee(newEmployee) {
  return function(dispatch){
    dispatch(setNewEmployeeSuccess(newEmployee));
  }
}