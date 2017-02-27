import React from 'react';
import * as styles from '../common/styles';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import GradeHistoryRow from './GradeHistoryRow';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import update from 'react-addons-update';

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
      gradeHistory: this.props.gradeHistory || [],
      selectedIndex: null,
      protectMode:true,
      oldGradeHistory: this.props.gradeHistory || []
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
    this.setState({oldGradeHistory: nextProps.gradeHistory || []});
    if (this.props.person.id !== nextProps.person.id){
      this.setState({selectedIndex: null})
    }
  }

  handleEditMode(index){
    this.setState({selectedIndex: index,
      oldGradeHistory: this.state.gradeHistory});
    // var tempGradeHistory = Object.assign({}, this.state.)
  }

  handleSaveMode(){
    var newUpdate = Object.assign(this.props.person.gradeHistory, this.state.gradeHistory);
    this.setState({gradeHistory: newUpdate});
    this.setState({selectedIndex: null});
    console.log(this.state.oldGradeHistory);
  }

  handleDeleteClick(index){
    var newGradeHistory = this.state.gradeHistory;
    newGradeHistory.splice(index,1);
    this.setState({gradeHistory: newGradeHistory});
    var newPersonDetail = Object.assign(this.props.person, newGradeHistory);
    this.props.updatePersonDetail(newPersonDetail);
  }

  handleAddGrade(){
    let newLine = {
      'startDate': {},
      'endDate':{},
      'grade':'',
      'devStage':''
    };
    let a = Object.assign([],this.props.person.gradeHistory);
    a.push(newLine);
    this.setState({gradeHistory: a});
  }

  handleCheckField(event, key, indexGrade){
    let newGradeHistory = Object.assign([],this.state.gradeHistory);
    newGradeHistory[indexGrade][key]=event.target.checked;

    this.setState({gradeHistory: newGradeHistory});
  }

  handleNumericField(value, key, indexGrade){
    // let newGradeHistory = Object.assign([],this.state.gradeHistory);
    // newGradeHistory[indexGrade][key]=event.target.value;

    // this.setState({gradeHistory: newGradeHistory});
    var newGradeHistory = update(this.state.gradeHistory, {
      [indexGrade]: {
        [key]:{$set: value}
      }
    });
    this.state.gradeHistory = newGradeHistory;
//    this.setState({gradeHistory: newGradeHistory});
    if (newGradeHistory[indexGrade].grade > 0 && newGradeHistory[indexGrade].grade < 6){
      this.setStage('devStage', 'JP', indexGrade, newGradeHistory);
    }else if (newGradeHistory[indexGrade].grade > 5 && newGradeHistory[indexGrade].grade < 9) {
      this.setStage('devStage', 'PG', indexGrade, newGradeHistory);
    }else if (newGradeHistory[indexGrade].grade > 8 && newGradeHistory[indexGrade].grade < 16) {
      this.setStage('devStage', 'AP', indexGrade, newGradeHistory);
    }else if (newGradeHistory[indexGrade].grade > 15 && newGradeHistory[indexGrade].grade < 21) {
      this.setStage('devStage', 'AN', indexGrade, newGradeHistory);
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
    if (this.props.person.id !== undefined){
      addButton.push(
        <FlatButton
          backgroundColor="#a4c639"
          hoverColor="#8AA62F"
          icon={<FontIcon className="material-icons">add_circle_outline</FontIcon>}
          style={styles.ButtonAddDetail}
          onTouchTap={this.handleAddGrade}
        />
      );
    }

    if (!this.props.createMode){
      displayTitle.push(<h4>Grade History</h4>);
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

export default GradeHistory;