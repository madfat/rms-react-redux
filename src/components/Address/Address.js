import React from 'react';
import * as styles from '../common/styles';
import TextField from 'material-ui/TextField';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import Toggle from 'material-ui/Toggle';
import Checkbox from 'material-ui/Checkbox';

class Address extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      showCheckboxes: false,
      height: '300px',
      addressHistory: this.props.addressHistory || []
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
    var addressHistory = this.props.addressHistory;
    if (addressHistory != null){
      return(
        <div style={styles.FormControl}>
          <h4>Address History</h4>

          <Table
            height={this.state.height}
            fixedHeader={this.state.fixedHeader}
            fixedFooter={this.state.fixedFooter}
          >
            <TableHeader
            >
              <TableRow>
                <TableHeaderColumn tooltip="The Name">Address</TableHeaderColumn>
                <TableHeaderColumn tooltip="The Gender">Active</TableHeaderColumn>
                <TableHeaderColumn>Actions</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody
              showRowHover={this.state.showRowHover}
              stripedRows={this.state.stripedRows}
            >
              {addressHistory.map( (row, index) => (
                <TableRow key={index}>
                  <TableRowColumn>{row.address}</TableRowColumn> 
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
            No Address History
          </div>
        </div>
      );
    }
  }
}

export default Address;