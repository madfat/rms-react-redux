export default {
  employees: [],
  currentEmployee: {},
  openDialog: false,
  newEmployee: {},
  lookup: {
    MARITAL: [],
    ERROR: [],
    GRADE: [],
    NATION: [],
    EMPSTAT: [],
    DEPTYPE: [],
    JOBFAM: [],
    STREAM: [],
    GENDER: [],
    LOC: []
  },
  paging: {
    totalElements: 0, 
    number: 0,
    size: 0,
    current: 1
  },
  filtered: {
    byName: false,
    byFilter: false,
    all: true
  }
};