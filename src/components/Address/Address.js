import React from 'react';
import * as styles from '../common/styles';
import TextField from 'material-ui/TextField';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import AddressRow from './AddressRow';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import update from 'react-addons-update';

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
      addressHistory: this.props.addressHistory || [],
      selectedIndex: null,
      protectMode:true,
    };

    this.handleSaveMode = this.handleSaveMode.bind(this);
    this.handleEditMode = this.handleEditMode.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleAddAddress = this.handleAddAddress.bind(this);
    this.handleCheckField = this.handleCheckField.bind(this);
    this.handleTextField = this.handleTextField.bind(this);
  }

  componentWillReceiveProps(nextProps){
    this.setState({addressHistory: nextProps.addressHistory || []});
    if (this.props.person.id !== nextProps.person.id){
      this.setState({selectedIndex: null})
    }
  }

  handleEditMode(index){
    this.setState({selectedIndex: index})
  }

  handleSaveMode(){
    var newUpdate = Object.assign(this.props.person.addressHistory, this.state.addressHistory);
    this.setState({addressHistory: newUpdate});
    this.setState({selectedIndex: null})
  }

  handleDeleteClick(index){
   this.setState({addressHistory: this.state.addressHistory.splice(index,1)});
  }

  handleAddAddress(){
    let newLine = {
      'address': '',
      'activeInd':false
    };
    let a = Object.assign([],this.props.person.addressHistory);
    a.push(newLine);
    this.setState({addressHistory: a});
  }

  handleCheckField(event, key, indexAddress){
    let newAddressHistory = Object.assign([],this.state.addressHistory);
    newAddressHistory[indexAddress][key]=event.target.checked;

    this.setState({addressHistory: newAddressHistory});
  }

  handleTextField(event, key, indexAddress){
    // let newAddressHistory = Object.assign([],this.state.addressHistory);
    // newAddressHistory[indexDependent][key]=event.target.value;

    // this.setState({addressHistory: newAddressHistory});
    var newAddressHistory = update(this.state.addressHistory, {
      [indexAddress]: {
        [key]:{$set: event.target.value}
      }
    });
    this.setState({addressHistory: newAddressHistory});

  }

  render(){
    var ah = this.state.addressHistory;
    var line = {};
    if (ah.length){
      line = ah.map((address, index) => 
        <AddressRow
          key={index}
          address = {address}
          index = {index}
          selectedIndex = {this.state.selectedIndex}
          handleEditMode = {this.handleEditMode}
          handleSaveMode = {this.handleSaveMode}
          handleDeleteClick = {this.handleDeleteClick}
          handleCheckField = {this.handleCheckField}
          handleTextField = {this.handleTextField}
        />
      );
    }
    return(
      <div style={styles.FormControl}>
        <h4>Address History</h4>
        <FlatButton
          backgroundColor="#a4c639"
          hoverColor="#8AA62F"
          icon={<FontIcon className="material-icons">add_circle_outline</FontIcon>}
          style={styles.ButtonAddDetail}
          onTouchTap={this.handleAddAddress}
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
              <TableHeaderColumn style={{width: '400px'}} tooltip="The Name">Address</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Type">Active</TableHeaderColumn>
              <TableHeaderColumn>Actions</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          {
            ah.length > 0 ?
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

export default Address;