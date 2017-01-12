import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import * as styles from './styles.js';
import PersonsList from './PersonsList';
import SearchBar from './SearchBar';
import Sort from './Sort';
import Filter from './Filter';
import Chip from 'material-ui/Chip';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import ModalEmployee from './ModalEmployee';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import DetailTabs from './DetailTabs';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';

class Main extends React.Component {
  constructor(props){ 
    super(props);  
          
    this.state = {
      filterText:'',
      counterList: 0,
      person: {},
      open: false,
      employees: EMPLOYEES, 
      newEmployee: {},
      SearchResult: []
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.updatePersonDetail = this.updatePersonDetail.bind(this);  
    this.updateCounter = this.updateCounter.bind(this); 
    this.handleOpen = this.handleOpen.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleCancelCreate = this.handleCancelCreate.bind(this);
    this.updateNewEmployee = this.updateNewEmployee.bind(this);
  }

  handleOpen(){
    this.setState({open: true});
  }

  componentDidMount(){
    this.setState({SearchResult: this.state.employees});
  }

  updateNewEmployee(e){
    this.setState({newEmployee: e});
  }
  
  handleSave(){
    let temp = this.state.employees;
    temp.push(Object.assign(this.state.newEmployee,{id: Math.random() * (1000 - 8) + 7}));
    
    this.setState({open: false, employees:temp});
  }

  handleCancelCreate(){
    this.setState({open: false});
  }

  handleUserInput(filterText){
    this.setState({
      filterText: filterText,
    });
    if (this.state.filterText.length > 2){
      let empl = [];
      this.state.employees.forEach((employee) => {
        let fullName = employee.firstName.toLowerCase() +' '+ employee.lastName.toLowerCase();
        if (fullName.indexOf(this.state.filterText.toLowerCase()) === -1){
          return;
        } 
        empl.push(employee);
      });
      this.setState({SearchResult: empl});
    } else{
      this.setState({SearchResult: this.state.employees});
    }
  }

  updateCounter(counted){
    this.setState({counterList: counted});
  }


  updatePersonDetail(e){
    this.setState({
      person: e
    });
  }

  render() {
    const actions = [
      <FlatButton
        key={'flatbutton-1'}
        label="Save"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleSave}
      />,
    ];
    return (
      <main className="mdl-layout__content">
        <div className="mdl-grid">

          <div className="mdl-cell mdl-cell--4-col">
            <div className="mdl-sub">
              <div className="mdl-sub__header-row">
                
                <SearchBar
                  filterText={this.state.filterText}
                  onUserInput={this.handleUserInput}
                 />
                <div className="mdl-layout-spacer" />
                <Sort />
                <Filter />
                <Chip>{this.state.SearchResult.length}</Chip>
              </div>
            </div>

            <PersonsList 
              key={this.state.employees.id}
              persons={this.state.SearchResult}
              filterText={this.state.filterText}
              updatePersonDetail={this.updatePersonDetail}
              updateCounter = {this.updateCounter}/>

          </div>

          <div key={'floatingButton-1'}>
            <FloatingActionButton style={styles.ButtonAddEmployee} onTouchTap={this.handleOpen}>
              <ContentAdd />
            </FloatingActionButton>
            <Dialog
              title="Create New Employee"
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleCancelCreate}
              contentStyle={styles.ModalEmployee}
              autoScrollBodyContent={true}
            >
              <ModalEmployee
                employees={this.state.employees}
                newEmployee={this.state.newEmployee}
                updateNewEmployee={this.updateNewEmployee}
              />
            </Dialog>
          </div>

          <div key={"tabsWrapper"} className="mdl-cell mdl-cell--8-col">
            <DetailTabs 
              person={this.state.person}
              updatePersonDetail={this.updatePersonDetail}
            />
          </div>

        </div>
      </main>
    );
  }
}

let EMPLOYEES = [
  {id:'1', firstName: 'Akhmad', lastName: 'Fathoni', division: 'SE', grade:'AP', location:'Yogyakarta', phone:'+628562347705', 
   stream: 'CDC', jobFamily: 'Java', hiredDate: new Date(2011,10,15), gender:2, status: 2, nationality: 'Indonesia', 
   marital: 3, email: 'akhmad.fathoni@mitrais.com', dob: new Date(1990,1,1), activeInd: true,
   dependents: [{name: 'Dian Sastro', dob: new Date(1990,1,1), gender: 3, type: 'Wife', activeInd: true},
                {name: 'Nabila Syakieb', dob: new Date(2013,5,13), gender: 3, type: 'Child', activeInd: false},
                {name: 'Nabila Syakieb2', dob: new Date(2013,5,13), gender: 3, type: 'Child', activeInd: false}
               ],
   employmentHistories: [{startDate: new Date(2015,5,2), endDate:{}, employer: 'Mitrais', jobDesc:['Backend developer, Frontend Developer'], activeInd: true},
                         {startDate: new Date(2010,4,2), endDate: new Date(2014,12,31), employer: 'Google', jobDesc:['Backend developer, Frontend Developer'], activeInd: false},
                        ],
   locationHistory:[{id:1,relocationStartDate: new Date(2016,3,2), relocationEndDate:{}, branchOffice: 'Yogyakarta', address:'Jl. Sidobali No. 2 Umbulharjo, Mujamuju, Yogyakarta'},
                    {id:2, relocationStartDate: new Date(2014,2,2), relocationEndDate:new Date(2016,3,2), branchOffice: 'Bali', address:'Jl. By Pass Ngurah Rai gg. Mina Utama No. 1 Suwung 80223, Bali'}
                   ],
   addressHistory:[{id: 1, address: 'Bantul', activeInd: true}]
  },
  {id:'2', firstName: 'John', lastName: 'Doe', division: 'SE', grade:'AN', location:'Bali', phone:'+6285517705', 
  stream: 'CDC', jobFamily: 'Mobile', hiredDate: new Date(2012,12,15), gender:2, status: 2, nationality: 'Indonesia', 
  marital: 3,email: 'john.doe@mitrais.com', dob: new Date(1996,4,12), activeInd: false,
  dependents: [{name: 'Melani Sastro', dob: new Date(1990,1,1), gender: 3, type: 'Wife', activeInd: true},
                {name: 'Agus Decaprio', dob: new Date(2013,5,13), gender: 2, type: 'Child', activeInd: true}
               ]
  },
  {id:'3', firstName: 'Roberto', lastName: 'Carlos', division: 'SE', grade:'AP', location:'Yogyakarta', phone:'+6285623705', 
  stream: 'CDC', jobFamily: 'MEAN', hiredDate: new Date(2001,11,13), gender:2, status: 2, nationality: 'Indonesia', 
  marital: 3, email: 'roberto.carlos@mitrais.com', dob: new Date(1995,2,13), activeInd: true,
  dependents: [{name: 'Jesica Alba', dob: new Date(1990,1,1), gender: 3, type: 'Wife', activeInd: true},
                {name: 'Multazam Azam', dob: new Date(2013,5,13), gender: 3, type: 'Child', activeInd: true}
              ]
  },
  {id:'4', firstName: 'Angelina', lastName: 'Jolie', division: 'SE', grade:'PG', location:'Bandung', phone:'+62856487705', 
   stream: 'CDC', jobFamily: 'Java', hiredDate: new Date(2010,7,17), gender:3, status: 2, nationality: 'Indonesia', 
   marital: 3,  email: 'angelina.jolie@mitrais.com', dob: new Date(1994,3,14), activeInd: true},
  // {id:'5', firstName: 'Iron', lastName: 'Man', division: 'SE', grade:'AP', location:'Yogyakarta', phone:'+62854387705', 
  //  stream: 'CDC', jobFamily: 'MERN', hiredDate: new Date(2011,10,18), gender:2, status: 2, nationality: 'Indonesia', 
  //  marital: 3, email: 'iron.man@mitrais.com', dob: new Date(1993,6,15), activeInd: true},
  // {id:'6', firstName: 'Robo', lastName: 'Cop', division: 'SE', grade:'JP', location:'Jakarta', phone:'+628563405', 
  //  stream: 'CDC', jobFamily: '.NET', hiredDate: new Date(2013,5,15), gender:2, status: 2, nationality: 'Indonesia',
  //  marital: 3,  email: 'robo.cop@mitrais.com', dob: new Date(1992,7,17), activeInd: true},
  // {id:'7', firstName: 'Shania', lastName: 'Twain', division: 'SE', grade:'AP', location:'Bali', phone:'+6284453705', 
  //  stream: 'CDC', jobFamily: 'Java', hiredDate: new Date(2015,10,13),gender:3, status: 2, nationality: 'Indonesia',
  //  marital: 3,  email: 'shania.train@mitrais.com', dob: new Date(1991,8,18),activeInd: false},
];

export default Main;