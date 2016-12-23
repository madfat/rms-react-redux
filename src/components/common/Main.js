import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import * as styles from './styles.js';
import EmployeeDetail from '../EmployeeDetail/EmployeeDetail';
import Address from '../Address/Address';
import Dependents from '../Dependents/Dependents';
import EmploymentHistory from '../EmploymentHistory/EmploymentHistory';
import GradeHistory from '../GradeHistory/GradeHistory';
import Location from '../Location/Location';
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
      open: false
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.updatePersonDetail = this.updatePersonDetail.bind(this);  
    this.updateCounter = this.updateCounter.bind(this); 
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen(){
    this.setState({open: true});
  }
  
  handleClose(){
    this.setState({open: false});
  }

  handleUserInput(filterText){
    this.setState({
      filterText: filterText,
    });
  }

  updateCounter(counted){
    this.setState({counterList: counted});
  }

  updatePersonDetail(e){
    this.setState({
      person: e
    })
  }

  render() {
    const actions = [
      <FlatButton
        label="Save"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
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
                <Chip>{this.state.counterList}</Chip>
              </div>
            </div>

            <PersonsList 
              persons={EMPLOYEES}
              filterText={this.state.filterText}
              updatePersonDetail={this.updatePersonDetail}
              updateCounter = {this.updateCounter}/>

          </div>

          <div>
            <FloatingActionButton style={styles.ButtonAddEmployee} onTouchTap={this.handleOpen}>
              <ContentAdd />
            </FloatingActionButton>
            <Dialog
              title="Create New Employee"
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
              contentStyle={styles.ModalEmployee}
              autoScrollBodyContent={true}
            >
              <ModalEmployee />
            </Dialog>
          </div>

          <div className="mdl-cell mdl-cell--8-col">
            <Tabs>
              <Tab
                icon={<FontIcon className="material-icons">person</FontIcon>}
                style={styles.tabHeader}>
                <EmployeeDetail person={this.state.person}/>
              </Tab>
              <Tab
                icon={<FontIcon className="material-icons">history</FontIcon>}
                style={styles.tabHeader}>
                <GradeHistory />
              </Tab>
              <Tab
                icon={<FontIcon className="material-icons">layers</FontIcon>}
                style={styles.tabHeader}>
                <EmploymentHistory />
              </Tab>
              <Tab
                icon={<FontIcon className="material-icons">wc</FontIcon>}
                style={styles.tabHeader}>
                <Dependents 
                  dependents = {this.state.person.dependents} />
              </Tab>
              <Tab
                icon={<FontIcon className="material-icons">home</FontIcon>}
                style={styles.tabHeader}>
                <Address />
              </Tab>
              <Tab
                icon={<FontIcon className="material-icons">location_on</FontIcon>}
                style={styles.tabHeader}>
                <Location />
              </Tab>
            </Tabs>
          </div>

        </div>
      </main>
    );
  }
}

var EMPLOYEES = [
  {id:'1', firstName: 'Akhmad', lastName: 'Fathoni', division: 'SE', grade:'AP', location:'Yogyakarta', phone:'+628562347705', stream: 'CDC', jobFamily: 'Java', hiredDate: new Date(2011,10,15), gender:2, status: 2, nationality: 'Indonesia', marital: 3, email: 'akhmad.fathoni@mitrais.com', dob: new Date(1990,1,1), dependents: [{name: 'Dian Sastro', dob: new Date(1990,1,1), gender: 3, type: 'Wife', active: 2},{name: 'Nabila Syakieb', dob: new Date(2013,4,3), gender: 3, type: 'Child', active: 2}]},
  {id:'2', firstName: 'John', lastName: 'Doe', division: 'SE', grade:'AN', location:'Bali', phone:'+6285517705', stream: 'CDC', jobFamily: 'Mobile', hiredDate: new Date(2012,12,15), gender:2, status: 2, nationality: 'Indonesia', marital: 3,email: 'john.doe@mitrais.com', dob: new Date(1996,4,12)},
  {id:'3', firstName: 'Roberto', lastName: 'Carlos', division: 'SE', grade:'AP', location:'Yogyakarta', phone:'+6285623705', stream: 'CDC', jobFamily: 'MEAN', hiredDate: new Date(2001,11,13), gender:2, status: 2, nationality: 'Indonesia', marital: 3, email: 'roberto.carlos@mitrais.com', dob: new Date(1995,2,13)},
  {id:'4', firstName: 'Angelina', lastName: 'Jolie', division: 'SE', grade:'PG', location:'Bandung', phone:'+62856487705', stream: 'CDC', jobFamily: 'Java', hiredDate: new Date(2010,7,17), gender:3, status: 2, nationality: 'Indonesia', marital: 3,  email: 'angelina.jolie@mitrais.com', dob: new Date(1994,3,14)},
  {id:'5', firstName: 'Iron', lastName: 'Man', division: 'SE', grade:'AP', location:'Yogyakarta', phone:'+62854387705', stream: 'CDC', jobFamily: 'MERN', hiredDate: new Date(2011,10,18), gender:2, status: 2, nationality: 'Indonesia', marital: 3, email: 'iron.man@mitrais.com', dob: new Date(1993,6,15)},
  {id:'6', firstName: 'Robo', lastName: 'Cop', division: 'SE', grade:'JP', location:'Jakarta', phone:'+628563405', stream: 'CDC', jobFamily: '.NET', hiredDate: new Date(2013,5,15), gender:2, status: 2, nationality: 'Indonesia', marital: 3,  email: 'robo.cop@mitrais.com', dob: new Date(1992,7,17)},
  {id:'7', firstName: 'Shania', lastName: 'Twain', division: 'SE', grade:'AP', location:'Bali', phone:'+6284453705', stream: 'CDC', jobFamily: 'Java', hiredDate: new Date(2015,10,13),gender:3, status: 2, nationality: 'Indonesia', marital: 3,  email: 'shania.train@mitrais.com', dob: new Date(1991,8,18)},
];

export default Main;