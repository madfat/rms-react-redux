import {combineReducers} from 'redux';
import employees from './employeeReducer';
import currentEmployee from './currentEmployeeReducer';
import openDialog from './openDialogReducer';
import newEmployee from './newEmployeeReducer';
import lookup from './lookupReducer';
import paging from './employeesPagingReducer';
import openFilter from './FilterDialogReducer';

const rootReducer = combineReducers({
  employees,
  currentEmployee,
  openDialog,
  newEmployee,
  lookup,
  paging,
  openFilter
});

export default rootReducer;