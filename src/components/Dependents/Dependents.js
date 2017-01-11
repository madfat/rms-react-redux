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
import update from 'react-addons-update';
import DependentRow from './DependentRow';

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
      dependents: this.props.dependents || [],
      protectMode:true,
      selectedIndex: null,
      dependent:{}
    };
    this.handleEditMode = this.handleEditMode.bind(this);
    this.handleSaveMode = this.handleSaveMode.bind(this);
    this.handleTextField = this.handleTextField.bind(this);
  }

  componentWillReceiveProps(nextProps){
    this.setState({dependents: nextProps.dependents || []});
    this.setState({selectedIndex: null})
  }

  handleEditMode(index){
    this.setState({selectedIndex: index})
  }

  handleSaveMode(index){
    var newUpdate = Object.assign(this.props.person.dependents, this.state.dependents);
    this.setState({dependents: newUpdate});
    this.setState({selectedIndex: null})
  }

  handleTextField(e, key, index){
    var newDependents = update(this.state.dependents, {
      [index]: {
        [key]:{$set: e.target.value}
      }
    });
    console.log(newDependents);
    this.setState({dependents: newDependents});
  }

  render(){
    var dependents = this.state.dependents;
    if (dependents.length > 0) {
      var line = dependents.map((dependent,index)=>
        <DependentRow
          key={index}
          index={index}
          dependent={dependent}
          handleTextField={this.handleTextField}
          selectedIndex={this.state.selectedIndex}
          handleEditMode={this.handleEditMode}
          handleSaveMode={this.handleSaveMode}
        />
      );
      console.log("line");
      console.log(line);
    }
    if (dependents != null){
      return(
        <div style={styles.FormControl}>
          <h4>Dependents</h4>

          <Table
            height={this.state.height}
            fixedHeader={this.state.fixedHeader}
            fixedFooter={this.state.fixedFooter}
            displaySelectAll={false}
          >
            <TableHeader
              displaySelectAll={false}
              adjustForCheckbox={false}
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
              displayRowCheckbox={false}
            >
              {line}
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