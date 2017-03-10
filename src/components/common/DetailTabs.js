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
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as employeeActions from '../../actions/employeeActions';

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
    const {currentEmployee} = this.props;
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
            currentEmployee={currentEmployee || {}}
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
            person={currentEmployee || {}}
            gradeHistory={currentEmployee.gradeHistory}/>
        </Tab>
        <Tab
          value='employment'
          onActive={this.tabClicked}
          icon={<FontIcon className="material-icons">layers</FontIcon>}
          style={styles.tabHeader}>
          <EmploymentHistory
            person={currentEmployee || {}}
            employmentHistories = {currentEmployee.employmentHistories}/>
        </Tab>
        <Tab
          value='dependent'
          onActive={this.tabClicked}
          icon={<FontIcon className="material-icons">wc</FontIcon>}
          style={styles.tabHeader}>
          <Dependents 
            person={currentEmployee || {}}
            dependents = {currentEmployee.dependents}
            createMode={false} />
        </Tab>
        <Tab
          value='address'
          onActive={this.tabClicked}
          icon={<FontIcon className="material-icons">home</FontIcon>}
          style={styles.tabHeader}>
          <Address
            person={currentEmployee || {}}
            addressHistory={currentEmployee.addressHistory}/>
        </Tab>
        <Tab
          value='location'
          onActive={this.tabClicked}
          icon={<FontIcon className="material-icons">location_on</FontIcon>}
          style={styles.tabHeader}>
          <Location locationHistory={currentEmployee.locationHistory}/>
        </Tab>
    </Tabs>
    );
  }
}


function mapStateToProps(state, ownProps){
    return {
        currentEmployee: state.currentEmployee  //state.employees refers to reducers/index.js
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(employeeActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailTabs);
