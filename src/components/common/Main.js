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

class Main extends React.Component {
  constructor(props){ 
    super(props);  
    this.handleChange = this.handleChange.bind(this);         
    this.state = {
      value: 2
    };

  }

  handleChange(event, index, value){
    this.setState({value: value}); 
  }

  render() {

    return (
      <main className="mdl-layout__content">
        <div className="mdl-grid">

          <div className="mdl-cell mdl-cell--4-col">
            <div className="mdl-sub">
              <div className="mdl-sub__header-row">
                
                <SearchBar />
                <div className="mdl-layout-spacer" />
                <Sort />
                <Filter />

              </div>
            </div>

            <PersonsList persons={EMPLOYEES} />

          </div>

          <div className="mdl-cell mdl-cell--8-col">
            <Tabs>
              <Tab
                icon={<FontIcon className="material-icons">person</FontIcon>}
                style={styles.tabHeader}>
                <EmployeeDetail />
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
                <Dependents />
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
  {id:'1', firstName: 'Akhmad', lastName: 'Fathoni', division: 'SE', grade:'AP', location:'Yogyakarta', phone:'+6285645987705', stream: 'CDC', jobFamily: 'Java'},
  {id:'2', firstName: 'John', lastName: 'Doe', division: 'SE', grade:'AP', location:'Yogyakarta', phone:'+6285645987705', stream: 'CDC', jobFamily: 'Java'},
  {id:'3', firstName: 'Roberto', lastName: 'Carlos', division: 'SE', grade:'AP', location:'Yogyakarta', phone:'+6285645987705', stream: 'CDC', jobFamily: 'Java'},
  {id:'4', firstName: 'Angelina', lastName: 'Jolie', division: 'SE', grade:'AP', location:'Yogyakarta', phone:'+6285645987705', stream: 'CDC', jobFamily: 'Java'}
];

export default Main;