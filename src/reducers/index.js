import {combineReducers} from 'redux';
import employees from './employeeReducer';
import currentEmployee from './currentEmployeeReducer';
import openDialog from './openDialogReducer';
import newEmployee from './newEmployeeReducer';

const rootReducer = combineReducers({
  employees,
  currentEmployee,
  openDialog,
  newEmployee
});

export default rootReducer;