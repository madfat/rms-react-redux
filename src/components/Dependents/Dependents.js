import React from 'react';
import TextField from 'material-ui/TextField';
import * as styles from '../common/styles';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class Dependents extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      rows: []
    }
  }
  render(){
    // var rows = '';
    // console.log(this.props.dependents);
    // if (this.props.dependents != null){
    //   this.props.dependents.forEach(function(dependent){
    //     rows.append(<TableRow id={dependent.name}>
    //         <TableRowColumn>{dependent.name}</TableRowColumn>
    //         <TableRowColumn>{dependent.gender}</TableRowColumn>
    //         <TableRowColumn>{dependent.dob}</TableRowColumn>
    //         <TableRowColumn>{dependent.type}</TableRowColumn>
    //         <TableRowColumn>{dependent.active}</TableRowColumn>
    //       </TableRow>);
    //   }, this);
    // } else {
    //   <p>...</p>
    // }

    var dependents = this.props.dependents;
    if (dependents != null){
      return(
        <div style={styles.FormControl}>
          <h4>Dependents</h4>
          <div className="mdl-grid">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderColumn>Name</TableHeaderColumn>
                  <TableHeaderColumn>Gender</TableHeaderColumn>
                  <TableHeaderColumn>Date of Birth</TableHeaderColumn>
                  <TableHeaderColumn>Type</TableHeaderColumn>
                  <TableHeaderColumn>Active</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dependents.map((row, index) => {
                  <TableRow>
                    <TableRowColumn>{row.name}</TableRowColumn>
                  </TableRow>
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      );
    }else{
      return(
        <div style={styles.FormControl}>
          <h4>Dependents</h4>
          <div className="mdl-grid">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderColumn>Name</TableHeaderColumn>
                  <TableHeaderColumn>Gender</TableHeaderColumn>
                  <TableHeaderColumn>Date of Birth</TableHeaderColumn>
                  <TableHeaderColumn>Type</TableHeaderColumn>
                  <TableHeaderColumn>Active</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody>
              </TableBody>
            </Table>
          </div>
        </div>
      );
    }
  }
}

export default Dependents;