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
    console.log('constructor');
    this.handleChangeValue = this.handleChangeValue.bind(this);
  }

  componentWillReceiveProps(nextProps){
    console.log('will recieve');
    this.setState({dependent: nextProps.dependent || []});
  }

  handleChangeValue(event,key){
    console.log("handleChangeValue")
    this.props.handleTextField(event,key,this.props.index);
  }

  handleSaveClicked(event){
    this.props.handleSaveMode(event, this.props.index);
  }

  render() {
    return(
        <TableRow key={this.props.index}>
          <TableRowColumn>
            <TextField
              value={this.props.dependent.name}
              onChange={(event) => this.handleChangeValue(event,'name')}
              disabled={this.props.selectedIndex==this.props.index?false:true}
              underlineShow={false}
              style={styles.FormField}
            />
          </TableRowColumn> 
          <TableRowColumn>
            <SelectField
              value={this.props.dependent.gender}
              onChange={(event, index, value)=> this.handleGenderChange(event, index, value)}
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
              onChange={(event, date) => this.handleSuspendDate(event,date)} 
              disabled={this.props.selectedIndex==this.props.index?false:true}
              underlineShow={false}
              style={styles.FormField}
            />
          </TableRowColumn>
          <TableRowColumn>
            <TextField
              value={this.props.dependent.type}
              onChange={this.handleTypeChange}
              disabled={this.props.selectedIndex==this.props.index?false:true}
              underlineShow={false}
              style={styles.FormField}
            />
          </TableRowColumn> 
          <TableRowColumn>
            <Checkbox checked={this.props.dependent.activeInd} disabled={this.props.selectedIndex==this.props.index?false:true}/>
          </TableRowColumn> 
          <TableRowColumn> 
            {this.props.selectedIndex != this.props.index ? 
              <a href='#' onClick={this.props.handleEditMode.bind(this,this.props.index)}><i className="material-icons">mode_edit</i></a> 
              : 
              <a href='#' onClick={this.props.handleSaveMode.bind(this,this.props.index)}><i className="material-icons">save</i></a>} 
              &nbsp; 
              <a href='#'><i className="material-icons">delete</i></a>
          </TableRowColumn>
        </TableRow>
    );
  }
}

export default DependentRow;