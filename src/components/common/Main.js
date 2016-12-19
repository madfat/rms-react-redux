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
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right">
                  <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="fixed-header-drawer-exp">
                    <i className="material-icons">search</i>
                  </label>
                  <div className="mdl-textfield__expandable-holder">
                    <input className="mdl-textfield__input" type="text" name="sample" id="fixed-header-drawer-exp" />
                  </div>
                </div>
                <div className="mdl-layout-spacer" />
                <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="fixed-header-drawer-exp">
                  <i className="material-icons">sort</i>
                </label>
                <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="fixed-header-drawer-exp">
                  <i className="material-icons">filter_list</i>
                </label>
              </div>
            </div>
            <div>
              <PersonsList />
            </div>
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

export default Main;