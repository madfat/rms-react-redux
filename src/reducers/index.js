import {combineReducers} from 'redux';
import employees from './employeeReducer';
import currentEmployee from './currentEmployeeReducer';

const rootReducer = combineReducers({
  employees,
  currentEmployee
});

export default rootReducer;