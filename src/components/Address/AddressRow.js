import React from 'react';
import * as styles from '../common/styles';
import TextField from 'material-ui/TextField';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';

class AddressRow extends React.Component{
  constructor(props){
    super(props);
    this.handleChangeValue = this.handleChangeValue.bind(this);
    this.handleCheckField = this.handleCheckField.bind(this);
  }

  handleChangeValue(e, key){
    this.props.handleTextField(e, key, this.props.index)
  }

  handleCheckField(e, key){
    this.props.handleCheckField(e, key, this.props.index)
  }

  render(){
    return(
      <TableRow key={this.props.index}>
        <TableRowColumn style={{width: '400px'}}>
          <TextField
            id="address"
            value={this.props.address.address}
            onChange={(event) => this.handleChangeValue(event,'address')}
            disabled={this.props.selectedIndex==this.props.index?false:true}
            underlineShow={false}
            style={styles.FormField}
          />
        </TableRowColumn> 
        <TableRowColumn>
          <Checkbox 
            checked={this.props.address.activeInd} 
            disabled={this.props.selectedIndex==this.props.index?false:true}
            onClick={(event, key) => this.handleCheckField(event, 'activeInd')}
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

export default AddressRow;
