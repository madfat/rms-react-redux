import {combineReducers} from 'redux';
import employees from './employeeReducer';
import currentEmployee from './currentEmployeeReducer';
import openDialog from './openDialogReducer';
import newEmployee from './newEmployeeReducer';
import lookup from './lookupReducer';

const rootReducer = combineReducers({
  employees,
  currentEmployee,
  openDialog,
  newEmployee,
  lookup
});

export default rootReducer;