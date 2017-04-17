import reducer from './employeeReducer';
import * as types from '../actions/actionTypes';
import expect from 'expect';

describe('employees reducer',() =>{
  const employees = [
    {id: 1, firstName: 'firstName'}
  ];
  it('should return initial state',()=>{
    expect(
      reducer(undefined,[])
    ).toEqual([]);
  });

  it('should handle load employee list', () => {
    expect(
      reducer([],{type: types.LOAD_EMPLOYEE_LIST_SUCCESS, employees})
    ).toEqual(employees);
  });

  it('should handle find employee by name', () => {
    expect(
      reducer([],{type: types.FIND_EMPLOYEE_BY_NAME, employees})
    ).toEqual(employees);
  });

  it('should handle find employees by filter', () => {
    expect(
      reducer([],{type: types.FIND_EMPLOYEES_BY_FILTER, employees})
    ).toEqual(employees);
  });
});