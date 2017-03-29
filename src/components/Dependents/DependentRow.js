import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import DatePicker from 'material-ui/DatePicker';
import Checkbox from 'material-ui/Checkbox';
import * as styles from '../common/styles';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as employeeActions from '../../actions/employeeActions';

class DependentRow extends React.Component{
  constructor(props){
    super(props);
    this.handleChangeValue = this.handleChangeValue.bind(this);
  }

  componentWillReceiveProps(nextProps){
    this.setState({dependent: nextProps.dependent || []});
  }

  handleChangeValue(event,key){
    this.props.handleTextField(event,key,this.props.index);
  }

  handleSaveClicked(event){
    this.props.handleSaveMode(event, this.props.index);
  }

  handleSelectField(event, index, value, key) {
    this.props.handleSelectField(event, index, value, key, this.props.index);
  }

  handleDateField(event, value, key) {
    this.props.handleDateField(event, value, key, this.props.index);
  }
  handleCheckField(event, key){
    this.props.handleCheckField(event, key, this.props.index);
  }

  render() {
    console.log(this.props.lookup);
    const genderLookup=[];
    this.props.lookup.GENDER.forEach(function(item){
      genderLookup.push(<MenuItem key={item.id} value={item.dataCode} primaryText={item.dataDesc} />);
    });
    
    const typeLookup=[];
    this.props.lookup.DEPTYPE.forEach(function(item){
      typeLookup.push(<MenuItem key={item.id} value={item.dataCode} primaryText={item.dataDesc} />);
    });



    const objDependent = this.props.dependent;
    const fullName = objDependent.firstName + ' ' + objDependent.lastName;
    return(
        <TableRow key={this.props.index}>
          <TableRowColumn style={{width: '200px'}}>
            <TextField
              id="name"
              value={fullName}
              onChange={(event) => this.handleChangeValue(event,'name')}
              disabled={this.props.selectedIndex==this.props.index?false:true}
              underlineShow={false}
              style={styles.FormField}
            />
          </TableRowColumn> 
          <TableRowColumn>
            <SelectField
              id="gender"
              value={this.props.dependent.gender}
              onChange={(event, index, value)=>this.handleSelectField(event,index,value,'gender')}
              disabled={this.props.selectedIndex==this.props.index?false:true}
              underlineShow={false}
              style={styles.FormField}
            >
              {genderLookup}

            </SelectField>
          </TableRowColumn> 
          <TableRowColumn>
            <DatePicker
              value={this.props.dependent.dob}
              onChange={(event, date) => this.handleDateField(event,date,'dob')} 
              disabled={this.props.selectedIndex==this.props.index?false:true}
              underlineShow={false}
              style={styles.FormField}
            />
          </TableRowColumn>
          <TableRowColumn>
            <SelectField
              id="type"
              value={this.props.dependent.type}
              onChange={(event, index, value)=>this.handleSelectField(event,index,value,'type')}
              disabled={this.props.selectedIndex==this.props.index?false:true}
              underlineShow={false}
              style={styles.FormField}
            >
              {typeLookup}

            </SelectField>
          </TableRowColumn> 
          <TableRowColumn>
            <Checkbox 
              checked={this.props.dependent.activeInd} 
              disabled={this.props.selectedIndex==this.props.index?false:true}
              onClick={(event, key) => this.handleCheckField(event, 'activeInd')}
            />
          </TableRowColumn> 
          <TableRowColumn> 
            {this.props.selectedIndex != this.props.index ? 
              <a href='#' onClick={this.props.handleEditMode.bind(this,this.props.index)}><i className="material-icons">mode_edit</i></a> 
              : 
              <a href='#' onClick={this.props.handleSaveMode.bind(this,this.props.index)}><i className="material-icons">save</i></a>} 
              &nbsp; 
              <a href='#' onClick={this.props.handleDeleteClick.bind(this,this.props.index)}><i className="material-icons">delete</i></a>
          </TableRowColumn>
        </TableRow>
    );
  }
}


function mapStateToProps(state, ownProps){
    return {
        lookup: state.lookup  //state.employees refers to reducers/index.js
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(employeeActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DependentRow);