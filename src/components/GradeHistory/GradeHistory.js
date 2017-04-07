import React from 'react';
import * as styles from '../common/styles';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import GradeHistoryRow from './GradeHistoryRow';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import update from 'react-addons-update';
import * as Util from '../common/util'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as employeeActions from '../../actions/employeeActions';

class GradeHistory extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      showCheckboxes: false,
      height: '300px',
      gradeHistory: [],
      selectedIndex: null,
      protectMode:true,
    };

    this.handleSaveMode = this.handleSaveMode.bind(this);
    this.handleEditMode = this.handleEditMode.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleAddGrade = this.handleAddGrade.bind(this);
    this.handleNumericField = this.handleNumericField.bind(this);
    this.handleDateField = this.handleDateField.bind(this);
    this.setStage = this.setStage.bind(this);

  }

  componentWillReceiveProps(nextProps){
    this.setState({gradeHistory: nextProps.gradeHistory || []});
    if (this.props.person.id !== nextProps.person.id){
      this.setState({selectedIndex: null})
    }
  }

  handleEditMode(index){
    this.setState({selectedIndex: index});
  }

  handleSaveMode(index){
    const tmpPerson = this.props.person;
    tmpPerson['gradeHistories'] = this.state.gradeHistory;
    debugger;

    if (this.props.createMode){
      this.props.newEmployee['gradeHistory'] = this.state.gradeHistory;
      this.props.actions.setNewEmployee(this.props.newEmployee);
    } else {
      this.props.actions.setCurrentEmployee(tmpPerson);
      this.props.actions.editEmployee(tmpPerson)
    }
    this.setState({selectedIndex: null});
  }

  handleDeleteClick(index){
    const id = this.state.gradeHistory[index].id;
    this.props.actions.deleteGradeHistoryItem(id); 

    // this.state.gradeHistory.splice(index,1);
    // const tmpPerson = this.props.person;
    // tmpPerson['gradeHistory'] = this.state.gradeHistory;

    // if (this.props.createMode){
    //   this.props.newEmployee['gradeHistory'] = this.state.gradeHistory;
    //   this.props.actions.setNewEmployee(this.props.newEmployee);
    // } else {
    //   this.props.actions.setCurrentEmployee(tmpPerson);
    //   this.setState({gradeHistory: tmpPerson.gradeHistory});
    // }

  }

  handleAddGrade(){
    let newLine = {
      'startDate': null,
      'endDate': null,
      'grade':'',
      'devStage':''
    };
    let a = Object.assign([],this.state.gradeHistory);
    a.push(newLine);
    this.setState({gradeHistory: a});
  }

  handleCheckField(event, key, indexGrade){
    let newGradeHistory = Object.assign([],this.state.gradeHistory);
    newGradeHistory[indexGrade][key]=event.target.checked;

    this.setState({gradeHistory: newGradeHistory});
  }

  handleNumericField(value, key, indexGrade){
    var newGradeHistory = update(this.state.gradeHistory, {
      [indexGrade]: {
        [key]:{$set: value}
      }
    });
    this.state.gradeHistory = newGradeHistory;
//    this.setState({gradeHistory: newGradeHistory});
    if (newGradeHistory[indexGrade].devStage > 0 && newGradeHistory[indexGrade].devStage < 6){
      this.setStage('grade', 'JP', indexGrade, newGradeHistory);
    }else if (newGradeHistory[indexGrade].devStage > 5 && newGradeHistory[indexGrade].devStage < 9) {
      this.setStage('grade', 'PG', indexGrade, newGradeHistory);
    }else if (newGradeHistory[indexGrade].devStage > 8 && newGradeHistory[indexGrade].devStage < 16) {
      this.setStage('grade', 'AP', indexGrade, newGradeHistory);
    }else if (newGradeHistory[indexGrade].devStage > 15 && newGradeHistory[indexGrade].devStage < 21) {
      this.setStage('grade', 'AN', indexGrade, newGradeHistory);
    }
  }

  setStage(key, value, indexGrade, newGradeHistory){
    newGradeHistory = update(this.state.gradeHistory, {
      [indexGrade]: {
        [key]:{$set: value}
      }
    });
    this.setState({gradeHistory: newGradeHistory});
  }

  handleDateField(event, value, key, indexGrade) {
    var newGradeHistory = update(this.state.gradeHistory, {
      [indexGrade]: {
        [key]:{$set: value}
      }
    });
    this.setState({gradeHistory: newGradeHistory});
  }

  render(){
    var gh = this.state.gradeHistory;
    var line = {};
    var displayTitle = [];
    var addButton=[];
    if (gh.length){
      line = gh.map((grade, index) => 
        <GradeHistoryRow
          key={index}
          grade = {grade}
          index = {index}
          selectedIndex = {this.state.selectedIndex}
          handleEditMode = {this.handleEditMode}
          handleSaveMode = {this.handleSaveMode}
          handleDeleteClick = {this.handleDeleteClick}
          handleNumericField = {this.handleNumericField}
          handleDateField = {this.handleDateField}
        />
      );
    }
    
    if (this.props.person.id !== undefined || this.props.createMode){
      addButton.push(
        <FlatButton
          key="btn-add-grade"
          backgroundColor="#a4c639"
          hoverColor="#8AA62F"
          icon={<FontIcon className="material-icons">add_circle_outline</FontIcon>}
          style={styles.ButtonAddDetail}
          onTouchTap={this.handleAddGrade}
        />
      );
    }

    if (!this.props.createMode){
      displayTitle.push(<h4 key='grade-history'>Grade History</h4>);
    }
    return(
      <div style={styles.FormControl}>
        {displayTitle}
        {addButton}
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
              <TableHeaderColumn tooltip="Grade">Grade</TableHeaderColumn>
              <TableHeaderColumn tooltip="Development Stage">Dev. Stage</TableHeaderColumn>
              <TableHeaderColumn tooltip="Start Date">Start Date</TableHeaderColumn>
              <TableHeaderColumn tooltip="End Date">End Date</TableHeaderColumn>
              <TableHeaderColumn>Actions</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          {
            gh.length > 0 ?
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

function mapStateToProps(state, ownProps){
    return {
        newEmployee: state.newEmployee,  //state.employees refers to reducers/index.js
        employees: state.employees
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(employeeActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GradeHistory);
