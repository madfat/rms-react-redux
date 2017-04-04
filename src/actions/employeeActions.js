import * as types from './actionTypes';
import axios from 'axios';
import dummyEmployee from '../dummyData/employees';
import fetch from 'isomorphic-fetch';
import * as RMSConst from './constant';

export function loadEmployeeListSuccess(employees) {
  return {
    type: types.LOAD_EMPLOYEE_LIST_SUCCESS, 
    employees // similar with employees: employees
  };
}

export function loadEmployeeList(setCurrent, page){
  return function(dispatch){
    return axios.get(RMSConst.baseURI + '/api/employees?&page='+ page +'&size=8')
      .then(function(response){
        const resData = response["data"];
        const extracted_employees = resData["content"];
        const pageInfo = {"size": resData.size,
            "totalElement": resData.totalElements,
            "number": resData.number
            };
        dispatch(loadEmployeeListSuccess(extracted_employees));
        if (setCurrent==true){
          dispatch(setCurrentEmployeeSuccess(extracted_employees[0]));
        }
        
        dispatch(setEmployeesPagingSuccess(pageInfo));
      })
      .catch(function(error){
        throw(error);
      }); 
  };
}

export function editEmployeeSuccess(updatedEmployee){
  return {
    type: types.EDIT_EMPLOYEE_SUCCESS,
    updatedEmployee
  }
}

export function editEmployee(updatedEmployee){
  return function(dispatch){
    return axios.put(RMSConst.baseURI + '/api/employee/', updatedEmployee)
      .then(function(response){
        dispatch(editEmployeeSuccess(response["data"]));
      })
      .then(function(){
        dispatch(loadEmployeeList(false,0))
      });
  };
}

export function createEmployeeSuccess(newEmployee){
  return {
    type: types.CREATE_EMPLOYEE_SUCCESS,
    newEmployee
  }
}

export function createEmployee(newEmployee){
  return function(dispatch){
    return axios.post(RMSConst.baseURI + '/api/employee/', newEmployee)
      .then(function(response){
        dispatch(createEmployeeSuccess(response));
        dispatch(loadEmployeeList(false,1));
        dispatch(setCurrentEmployeeSuccess(response["data"]));
      })
  }
}

export function findEmployeeByNameSuccess(employees){
  return {
    type: types.FIND_EMPLOYEE_BY_NAME,
    employees
  };
}

export function findEmployeeByName(name) {
  return function(dispatch){
    if(name==''){
      dispatch(loadEmployeeList(true,0));
    }else{
      return axios.get(RMSConst.baseURI + '/api/employees/findbyname/'+ name +'?page=0&size=8')
        .then(function(response){
          const resData = response['data'];
          const extracted_employees = resData["content"];
          const pageInfo = {"size": resData.size,
            "totalElement": resData.totalElements,
            "number": resData.number
            };

          dispatch(findEmployeeByNameSuccess(extracted_employees));
          dispatch(setCurrentEmployeeSuccess(extracted_employees[0]));
          dispatch(setEmployeesPagingSuccess(pageInfo));
        })
    }
  };
}

export function setEmployeesPagingSuccess(page){
  return {
    type: types.SET_EMPLOYEES_PAGING,
    page
  }
}

export function setEmployeesPaging(page){
  return function(dispatch){
    dispatch(setEmployeesPagingSuccess(page))
  }
}

export function updateEmployeeListSuccess(modifiedEmployee) {
  return {
    type: types.UPDATE_EMPLOYEE_LIST,
    modifiedEmployee
  };
}

export function addEmployeeListSuccess(newEmployee) {
  return {
    type: types.ADD_EMPLOYEE_LIST,
    newEmployee
  };
}

export function setCurrentEmployeeSuccess(currentEmployee) {
  return {
    type: types.SET_CURRENT_EMPLOYEE_SUCCESS,
    currentEmployee  // similar with currentEmployee: currentEmployee
  };
}


export function setOpenDialogSuccess(openDialog) {
  return {
    type: types.SET_OPEN_DIALOG,
    openDialog
  };
}

export function setNewEmployeeSuccess(newEmployee){
  return {
    type: types.SET_NEW_EMPLOYEE,
    newEmployee
  };
}

export function loadLookupSuccess(lookup){
  return {
    type: types.LOAD_LOOKUP,
    lookup
  };
}

export function loadLookup(type){
  return function(dispatch){
    return axios.get(RMSConst.baseURI + '/api/lookup/' + type)
      .then(function(response){
        dispatch(loadLookupSuccess(response));
      });
  };
}

export function updateEmployeeList(newEmployee) {
  return function(dispatch) {
    dispatch(updateEmployeeListSuccess(newEmployee));
  };
}

export function setCurrentEmployee(employee){
  return function(dispatch){
    dispatch(setCurrentEmployeeSuccess(employee));
  };
}

export function setOpenDialog(openDialog){
  return function(dispatch) {
    dispatch(setOpenDialogSuccess(openDialog));
  };
}

export function setNewEmployee(newEmployee) {
  return function(dispatch){
    dispatch(setNewEmployeeSuccess(newEmployee));
  };
}