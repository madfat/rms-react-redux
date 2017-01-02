import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import DatePicker from 'material-ui/DatePicker';

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};

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
        <div>
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
                  <TableRowColumn>{row.active==true?'Yes':'No'}</TableRowColumn> 
                </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      );
    } else {
      return(
        <div>
          <h4>Dependents</h4>

          <Table
            height={this.state.height}
            fixedHeader={this.state.fixedHeader}
            fixedFooter={this.state.fixedFooter}
          >
            <TableHeader
            >
              <TableRow>
                <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
                <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
                <TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody
              showRowHover={this.state.showRowHover}
              stripedRows={this.state.stripedRows}
            >

            </TableBody>
          </Table>
        </div>
      );
    }
  }
}

export default Dependents;