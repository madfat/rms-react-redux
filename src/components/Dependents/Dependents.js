import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import DatePicker from 'material-ui/DatePicker';
import Checkbox from 'material-ui/Checkbox';
import * as styles from '../common/styles';

class Dependents extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      showCheckboxes: false,
      height: '300px',
      dependents: this.props.dependents || []
    };
  }

  handleToggle(event, toggled){
    this.setState({
      [event.target.name]: toggled,
    });
  }

  handleChange(event){
    this.setState({height: event.target.value});
  }


  render(){
    var dependents = this.props.dependents;
    if (dependents != null){
      return(
        <div style={styles.FormControl}>
          <h4>Dependents</h4>

          <Table
            height={this.state.height}
            fixedHeader={this.state.fixedHeader}
            fixedFooter={this.state.fixedFooter}
          >
            <TableHeader
            >
              <TableRow>
                <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
                <TableHeaderColumn tooltip="The Gender">Gender</TableHeaderColumn>
                <TableHeaderColumn tooltip="The DoB">Date of Birth</TableHeaderColumn>
                <TableHeaderColumn tooltip="The Type">Type</TableHeaderColumn>
                <TableHeaderColumn tooltip="The Type">Active</TableHeaderColumn>
                <TableHeaderColumn>Actions</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody
              showRowHover={this.state.showRowHover}
              stripedRows={this.state.stripedRows}
            >
              {dependents.map( (row, index) => (
                <TableRow key={index}>
                  <TableRowColumn>{row.name}</TableRowColumn> 
                  <TableRowColumn>{row.gender==2?'Male':'Female'}</TableRowColumn> 
                  <TableRowColumn>{row.dob.getMonth()+1+'-'+row.dob.getDate()+'-'+row.dob.getFullYear()}</TableRowColumn>
                  <TableRowColumn>{row.type}</TableRowColumn> 
                  <TableRowColumn><Checkbox checked={row.activeInd} disabled/></TableRowColumn> 
                  <TableRowColumn><a href='#'><i className="material-icons">mode_edit</i></a> &nbsp; <a href='#'><i className="material-icons">delete</i></a></TableRowColumn>
                </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      );
    } else {
      return(
        <div style={styles.FormControl}>
          <h4>Dependents</h4>
          <div>
            No Dependents
          </div>
        </div>
      );
    }
  }
}

export default Dependents;