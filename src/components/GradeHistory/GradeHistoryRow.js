import React from 'react';
import * as styles from '../common/styles';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import NumericInput from 'react-numeric-input';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import * as Util from '../common/util';

class GradeHistoryRow extends React.Component{
  constructor(props){
    super(props);
    this.handleChangeValue = this.handleChangeValue.bind(this);
    this.handleCheckField = this.handleCheckField.bind(this);
    this.handleDateField = this.handleDateField.bind(this);
  }

  handleChangeValue(e, key){
    this.props.handleNumericField(e, key, this.props.index)
  }

  handleCheckField(e, key){
    this.props.handleCheckField(e, key, this.props.index)
  }

  handleDateField(event, value, key) {
    this.props.handleDateField(event, value, key, this.props.index);
  }

  render(){
    const startDate = this.props.grade.startDate;
    const endDate = this.props.grade.endDate;

    return(
      <TableRow key={this.props.index}>
        <TableRowColumn>
          <TextField
            id="devStage"
            value={this.props.grade.grade}
            disabled={true}
            underlineShow={false}
            style={styles.FormField}
          />
        </TableRowColumn> 
        <TableRowColumn>
          <NumericInput
            id='grade'
            className="numeric-input"
            min={1}
            max={20}
            value={this.props.grade.devStage}
            disabled={this.props.selectedIndex==this.props.index?false:true}
            onChange={(event) => this.handleChangeValue(event,'devStage')}
          />
        </TableRowColumn>
        <TableRowColumn>
          <DatePicker
            value={startDate==null ? {}:Util.parseStrToDate(startDate)}
            onChange={(event, date) => this.handleDateField(event,date,'startDate')} 
            disabled={this.props.selectedIndex==this.props.index?false:true}
            underlineShow={false}
            style={styles.FormField}
          />
        </TableRowColumn>
        <TableRowColumn>
          <DatePicker
            value={endDate==null ? {} : Util.parseStrToDate(endDate)}
            onChange={(event, date) => this.handleDateField(event,date,'endDate')} 
            disabled={true}
            underlineShow={false}
            style={styles.FormField}
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

export default GradeHistoryRow;
