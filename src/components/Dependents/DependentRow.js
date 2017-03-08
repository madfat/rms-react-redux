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
    return(
        <TableRow key={this.props.index}>
          <TableRowColumn style={{width: '200px'}}>
            <TextField
              id="name"
              value={this.props.dependent.name}
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
              <MenuItem value={1} primaryText="" />
              <MenuItem value={2} primaryText="Male" />
              <MenuItem value={3} primaryText="Female" />
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
            <TextField
              id="type"
              value={this.props.dependent.type}
              onChange={(event) => this.handleChangeValue(event,'type')}
              disabled={this.props.selectedIndex==this.props.index?false:true}
              underlineShow={false}
              style={styles.FormField}
            />
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

export default DependentRow;