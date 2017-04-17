import * as types from './actionTypes';
import * as RMSConst from './constant';
import * as actions from './employeeActions';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import expect from 'expect';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

const api_reply = {
  content: [{id: 1, firstName: "akhmad"}],
  totalElements: 7,
  size: 2,
  number: 1
};

describe('actions', () => {
  it('should create an action to return employees', () => {
    const employees = [];
    const expectedAction = {
      type: types.LOAD_EMPLOYEE_LIST_SUCCESS,
      employees
    };
    expect(actions.loadEmployeeListSuccess(employees)).toEqual(expectedAction);
  });
});

describe('async actions', () => {

  afterEach(function() {
    nock.cleanAll(); 
  });

  it('creates LOAD_EMPLOYEE_LIST_SUCCESS when fetching employees has been done', () => {
    nock(RMSConst.baseURI)
      .get('/api/employees')
      .query(true)
      .reply(200, api_reply);

    const expectedActions = [
      { type: types.LOAD_EMPLOYEE_LIST_SUCCESS, employees: api_reply["content"] },
      { type: types.SET_CURRENT_EMPLOYEE_SUCCESS, currentEmployee: api_reply["content"][0]},
      { type: types.EMPLOYEES_FILTERED, flag: { all: true, byFilter: false, byName: false }},
      { type: types.SET_EMPLOYEES_PAGING, page: {number: 1, size: 2, totalElements: 7}}
    ];
    
    const store = mockStore({ employees: [], currentEmployee: {}, flag: {}, page: {} });

    return store.dispatch(actions.loadEmployeeList(true,0))
      .then(() => { // return of async actions
        actions.loadEmployeeListSuccess(api_reply["content"]);
        expect(store.getActions()).toEqual(expectedActions);
      }); 
  });

  it('creates CREATE_EMPLOYEE_SUCCESS when create employee has done', () => {
    const newEmpl = {
      firstName: "fist name",
      lastName: "last name"
    };
    nock(RMSConst.baseURI)
      .post('/api/employee/', JSON.stringify(newEmpl))
      .reply(200, newEmpl);
    
    const expectedActions = [
      { type: types.CREATE_EMPLOYEE_SUCCESS, newEmployee: newEmpl },
      { type: types.SET_CURRENT_EMPLOYEE_SUCCESS, currentEmployee: newEmpl}
    ];

    const store = mockStore({ newEmployee: {}, employees: [], currentEmployee: {} });

    return store.dispatch(actions.createEmployee(newEmpl))
      .then(()=>{
        actions.createEmployeeSuccess(newEmpl);
        expect(store.getActions()).toEqual(expectedActions);
      });

  });
});