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
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

class Dependents extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      showCheckboxes: false,
      height: '400px',
      dependents: this.props.dependents || [],
      protectMode:true,
      selectedIndex: null,
      dependent:{}
    };
    this.handleEditMode = this.handleEditMode.bind(this);
    this.handleSaveMode = this.handleSaveMode.bind(this);
    this.handleTextField = this.handleTextField.bind(this);
    this.handleSelectField = this.handleSelectField.bind(this);
    this.handleDateField = this.handleDateField.bind(this);
    this.handleDeleteClick =this.handleDeleteClick.bind(this);
    this.handleCheckField = this.handleCheckField.bind(this);
    this.handleAddDependent = this.handleAddDependent.bind(this);
  }

  componentWillReceiveProps(nextProps){
    this.setState({dependents: nextProps.dependents || []});
    this.setState({selectedIndex: null})
  }

  handleEditMode(index){
    this.setState({selectedIndex: index})
  }

  handleSaveMode(){
    var newUpdate = Object.assign(this.props.person.dependents, this.state.dependents);
    this.setState({dependents: newUpdate});
    this.setState({selectedIndex: null})
  }

  handleDeleteClick(index){
    this.setState({dependents: this.state.dependents.splice(index,1)});
    console.log(this.state.dependents);
  }

  handleTextField(e, key, indexDependent){
    let newDependents = Object.assign([],this.state.dependents);
    newDependents[indexDependent][key]=e.target.value;

    this.setState({dependents: newDependents});
  }

  handleSelectField(event, index, value, key, indexDependent){
    var newDependents = update(this.state.dependents, {
      [indexDependent]: {
        [key]:{$set: value}
      }
    });
    console.log(newDependents);
    this.setState({dependents: newDependents});
  }

  handleDateField(event, value, key, indexDependent) {
    var newDependents = update(this.state.dependents, {
      [indexDependent]: {
        [key]:{$set: value}
      }
    });
    console.log(newDependents);
    this.setState({dependents: newDependents});
  }

  handleCheckField(event, key, indexDependent){
    var newDependents = update(this.state.dependents, {
      [indexDependent]: {
        [key]:{$set: event.target.checked}
      }
    });
    this.setState({dependents: newDependents});
  }
  
  handleAddDependent(){
    let newLine = {
      'name': '',
      'gender':0,
      'date':{},
      'type':'',
      'activeInd':false
    };
    console.log(newLine);
    let a = Object.assign([],this.props.person.dependents);
    a.push(newLine);
    this.setState({dependents: a});
  }

  render(){
    var ds = this.state.dependents;
    var line={};
    if (ds.length > 0) {
      line = ds.map((dependent,index) =>
        <DependentRow
          key={index}
          index={index}
          dependent={dependent}
          handleTextField={this.handleTextField}
          selectedIndex={this.state.selectedIndex}
          handleEditMode={this.handleEditMode}
          handleSaveMode={this.handleSaveMode}
          handleSelectField = {this.handleSelectField}
          handleDateField = {this.handleDateField}
          handleDeleteClick = {this.handleDeleteClick}
          handleCheckField = {this.handleCheckField}
        />
      );
    }

    return(
      <div style={styles.FormControl}>
        <h4>Dependents</h4>
        <FlatButton
          backgroundColor="#a4c639"
          hoverColor="#8AA62F"
          icon={<FontIcon className="material-icons">add_circle_outline</FontIcon>}
          style={styles.ButtonAddDetail}
          onTouchTap={this.handleAddDependent}
        />
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
          {
            ds.length > 0 ?
              <TableBody
                showRowHover={this.state.showRowHover}
                stripedRows={this.state.stripedRows}
                displayRowCheckbox={false}
              >
                {line}
              </TableBody>
            :
              <TableBody
                showRowHover={this.state.showRowHover}
                stripedRows={this.state.stripedRows}
                displayRowCheckbox={false}
              >
                <TableRow>
                  <TableRowColumn>
                      <div style={styles.NoRecordFound}>
                      <span>No Record Found</span>
                      </div>
                  </TableRowColumn>
                </TableRow>
              </TableBody>
          }
        </Table>
      </div>
    );
  }
}

export default Dependents;