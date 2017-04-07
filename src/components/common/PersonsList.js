import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import * as styles from './styles';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as employeeActions from '../../actions/employeeActions';
import UncheckedIcon from 'material-ui/svg-icons/toggle/radio-button-unchecked';
import CheckedIcon from 'material-ui/svg-icons/toggle/radio-button-checked';

class PersonList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      numberItem: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.renderListItem = this.renderListItem.bind(this);
  }

  handleClick(e){
    this.props.actions.setCurrentEmployee(e);
  }

  renderListItem(employee){
    const temp = {
      dt: {
        float: "right",
        position: "relative"
      },
      ck: {
        top: "20px"
      }     
    };

    return(
      <div key={employee.id}>
        <ListItem 
          leftAvatar={<Avatar src={require('../../img/test.png')} />}
          primaryText={
            <span>
              <b>{employee.firstName} {employee.lastName}</b>
            </span>
          }
          secondaryText={
            <p>
              <span>{employee.division + '-' + employee.grade + ', ' + employee.stream + ' ' + employee.jobFamily}</span><br />
              <small>{employee.location + ', ' + employee.phone}</small>
            </p>
          }
          rightIcon={
            employee.activeInd == true ? <CheckedIcon style={temp.ck} /> : <UncheckedIcon style={temp.ck} />
          }
          secondaryTextLines={2}
            onClick = {this.handleClick.bind(this, employee)}
            key={employee.id} 
        />
        
        <Divider inset={true} />
      </div>
    );
  }

  render(){

    let rows = [];
    this.props.employees.forEach(function(employee) {
      rows.push(this.renderListItem(employee));
    }, this);

    return(
      <List>
        <div style={{overflowY:'scroll', height: '760px'}}>
          {rows}
        </div>
      </List>
    );
  }
}

PersonList.propTypes = {
  paging: React.PropTypes.object,
  employees: React.PropTypes.array,
  actions: React.PropTypes.object
};

function mapStateToProps(state, ownProps){
    return {
        employees: state.employees,  //state.employees refers to reducers/index.js
        paging: state.paging
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(employeeActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonList);
