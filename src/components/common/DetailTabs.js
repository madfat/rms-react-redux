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

class DetailTabs extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    //console.log(this.props);
    return(
      <Tabs>
        <Tab
          icon={<FontIcon className="material-icons">person</FontIcon>}
          style={styles.tabHeader}>
          <EmployeeDetail 
            person={this.props.person || {}}
            updatePersonDetail={this.props.updatePersonDetail}
          />
        </Tab>
        <Tab
          icon={<FontIcon className="material-icons">history</FontIcon>}
          style={styles.tabHeader}>
          <GradeHistory person={this.props.person}/>
        </Tab>
        <Tab
          icon={<FontIcon className="material-icons">layers</FontIcon>}
          style={styles.tabHeader}>
          <EmploymentHistory 
            employmentHistories = {this.props.person.employmentHistories}/>
        </Tab>
        <Tab
          icon={<FontIcon className="material-icons">wc</FontIcon>}
          style={styles.tabHeader}>
          <Dependents 
            dependents = {this.props.person.dependents} />
        </Tab>
        <Tab
          icon={<FontIcon className="material-icons">home</FontIcon>}
          style={styles.tabHeader}>
          <Address addressHistory={this.props.person.addressHistory}/>
        </Tab>
        <Tab
          icon={<FontIcon className="material-icons">location_on</FontIcon>}
          style={styles.tabHeader}>
          <Location locationHistory={this.props.person.locationHistory}/>
        </Tab>
      </Tabs>
    );
  }
}

export default DetailTabs;