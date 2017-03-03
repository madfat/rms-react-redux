import React from 'react';
import * as styles from './styles.js';
import EmployeeDetail from '../EmployeeDetail/EmployeeDetail';
import Address from '../Address/Address';
import Dependents from '../Dependents/Dependents';
import EmploymentHistory from '../EmploymentHistory/EmploymentHistory';
import GradeHistory from '../GradeHistory/GradeHistory';
import Location from '../Location/Location';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import { Link, IndexLink,browserHistory } from 'react-router';

class DetailTabs extends React.Component{
  constructor(props){
    super(props);
    this.tabClicked = this.tabClicked.bind(this);
  }

  tabClicked (e) {
    this.props.setCurrentTab(e.props.value);
    browserHistory.push('/' + e.props.value);
  }

  render(){
    console.dir(this.props);
    //console.log(this.props);
    return(
      <Tabs>
        <Tab
          value='detail'
          onActive={this.tabClicked}
          icon={<FontIcon className="material-icons">person</FontIcon>}
          style={styles.tabHeader}>
          <EmployeeDetail 
            value='detail'
            onActive={this.tabClicked}
            person={this.props.person || {}}
            updatePersonDetail={this.props.updatePersonDetail}
            createMode={false}
          />
        </Tab>
        <Tab
          value='grade'
          onActive={this.tabClicked}
          icon={<FontIcon className="material-icons">history</FontIcon>}
          style={styles.tabHeader}>
          <GradeHistory 
            person={this.props.person || {}}
            gradeHistory={this.props.person.gradeHistory}/>
        </Tab>
        <Tab
          value='employment'
          onActive={this.tabClicked}
          icon={<FontIcon className="material-icons">layers</FontIcon>}
          style={styles.tabHeader}>
          <EmploymentHistory
            person={this.props.person || {}}
            employmentHistories = {this.props.person.employmentHistories}/>
        </Tab>
        <Tab
          value='dependent'
          onActive={this.tabClicked}
          icon={<FontIcon className="material-icons">wc</FontIcon>}
          style={styles.tabHeader}>
          <Dependents 
            person={this.props.person || {}}
            dependents = {this.props.person.dependents}
            createMode={false} />
        </Tab>
        <Tab
          value='address'
          onActive={this.tabClicked}
          icon={<FontIcon className="material-icons">home</FontIcon>}
          style={styles.tabHeader}>
          <Address
            person={this.props.person || {}}
            addressHistory={this.props.person.addressHistory}/>
        </Tab>
        <Tab
          value='location'
          onActive={this.tabClicked}
          icon={<FontIcon className="material-icons">location_on</FontIcon>}
          style={styles.tabHeader}>
          <Location locationHistory={this.props.person.locationHistory}/>
        </Tab>
    </Tabs>
    );
  }
}

export default DetailTabs;