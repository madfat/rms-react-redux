import React from 'react';
import * as styles from '../common/styles';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import moment from 'moment';
import * as Util from '../common/util'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as employeeActions from '../../actions/employeeActions';

class EmployeeDetail extends React.Component{
  constructor(props){
  super(props);
    this.state = {
      id:'',
      firstName: '' ,
      lastName:'', 
      division:'', 
      stream:'', 
      gender: '',
      hiredDate: {},
      suspendDate: {}, 
      dob:{}, 
      nationality: '', 
      grade: '', 
      maritalStatus:'', 
      status: '', 
      phone:'', 
      email:'',
      protectMode: this.props.createMode==true?false:true,
      newEmployee:{
          id:'',
          firstName: '', 
          lastName: '', 
          division: '', 
          grade:'', 
          location:'', 
          phone:'', 
          stream: '', 
          jobFamily: '', 
          hiredDate: null, 
          gender:'', 
          employmentStatus:'', 
          nationality: '', 
          maritalStatus: '',
          suspendedDate:null, 
          email: '', 
          dob: null, 
          activeInd: false,
          gradeHistory:[],
          dependents: [],
          employmentHistories: [],
          locationHistory:[],
          addressHistory:[]
      }
    };
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleDivisionChange = this.handleDivisionChange.bind(this);
    this.handleStreamChange = this.handleStreamChange.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.handleHiredDate = this.handleHiredDate.bind(this);
    this.handleSuspendDate = this.handleSuspendDate.bind(this);
    this.handleDobChange = this.handleDobChange.bind(this);
    this.handleNationalityChange = this.handleNationalityChange.bind(this);
    this.handleGradeChange = this.handleGradeChange.bind(this);
    this.handleMaritalChange = this.handleMaritalChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
    this.updateNewEmployee = this.updateNewEmployee.bind(this)
  }

  componentWillReceiveProps(nextProps){
    this.setState ({
      id: nextProps.currentEmployee.id||'',
      firstName: nextProps.currentEmployee.firstName||'' ,
      lastName: nextProps.currentEmployee.lastName || '' ,
      division: nextProps.currentEmployee.division || '',
      stream: nextProps.currentEmployee.stream || '', 
      gender: nextProps.currentEmployee.gender || '',
      hiredDate: nextProps.currentEmployee.hiredDate == null ? null : Util.parseStrToDate(nextProps.currentEmployee.hiredDate),
      suspendDate: nextProps.currentEmployee.suspendedDate == null ? null :Util.parseStrToDate(nextProps.currentEmployee.suspendedDate) ,
      dob:  nextProps.currentEmployee.dob == null ? null : Util.parseStrToDate(nextProps.currentEmployee.dob),
      nationality: nextProps.currentEmployee.nationality || '',
      grade: nextProps.currentEmployee.grade || '',
      maritalStatus: nextProps.currentEmployee.maritalStatus || '',
      status: nextProps.currentEmployee.employmentStatus || '',
      phone: nextProps.currentEmployee.phone || '',
      email: nextProps.currentEmployee.email || ''
    });
  }

  handleStatusChange(e,i,v){
    this.setState({status: v});
    if (this.props.createMode){
      this.updateNewEmployee('employmentStatus', v);
    }
  }

  handleFirstNameChange(e){
    this.setState({firstName: e.target.value});
    if (this.props.createMode){
      this.updateNewEmployee('firstName', e.target.value);
    }
  }
  
  handleLastNameChange(e){
    this.setState({lastName: e.target.value});
    if (this.props.createMode){
      this.updateNewEmployee('lastName', e.target.value);
    }
  }

  handleDivisionChange(e){
    this.setState({division: e.target.value});
    if (this.props.createMode){
      this.updateNewEmployee('division', e.target.value);
    }
  }
  handleStreamChange(e){
    this.setState({stream: e.target.value});
    if (this.props.createMode){
      this.updateNewEmployee('stream', e.target.value);
    }
  }
  handleGenderChange(e,i,v){
    this.setState({gender: v});
    if (this.props.createMode){
      this.updateNewEmployee('gender', v);
    }
  }
  handleHiredDate(e,d){
    this.setState({hiredDate: d});
    if (this.props.createMode){
      this.updateNewEmployee('hiredDate', d);
    }
  }
  handleSuspendDate(e,d){
    this.setState({suspendDate: d});
    if (this.props.createMode){
      this.updateNewEmployee('suspendedDate', d);
    }
  }
  handleDobChange(e,d){
    this.setState({dob: d});
    if (this.props.createMode){
      this.updateNewEmployee('dob', d);
    }
  }
  handleNationalityChange(e){
    this.setState({nationality: e.target.value});
    if (this.props.createMode){
      this.updateNewEmployee('nationality', e.target.value);
    }
  }
  handleGradeChange(e){
    this.setState({grade: e.target.value});
    if (this.props.createMode){
      this.updateNewEmployee('grade', e.target.value);
    }
  }
  handleMaritalChange(e,i,v){
    this.setState({maritalStatus: v});
    if (this.props.createMode){
      this.updateNewEmployee('maritalStatus', v);
    }
  }
  handlePhoneChange(e){
    this.setState({phone: e.target.value});
    if (this.props.createMode){
      this.updateNewEmployee('phone', e.target.value);
    }
  }
  handleEmailChange(e){
    this.setState({email: e.target.value});
    if (this.props.createMode){
      this.updateNewEmployee('email', e.target.value);
    }
  }
  handleEditClick(){
    this.setState({protectMode: false});
  }

  updateNewEmployee(key,value){
    this.state.newEmployee[key] = value;
    let a = this.state.newEmployee;
    this.props.actions.setNewEmployee(Object.assign(this.props.newEmployee, a))
  }

  handleSaveClick(){
    this.setState({protectMode: true});
    let newDetailPerson = Object.assign(this.props.currentEmployee, {
      firstName: this.state.firstName,
      lastName: this.state.lastName, 
      division: this.state.division, 
      stream: this.state.stream, 
      gender: this.state.gender,
      hiredDate: this.state.hiredDate,
      suspendedDate: this.state.suspendDate, 
      dob:this.state.dob, 
      nationality: this.state.nationality, 
      grade: this.state.grade, 
      maritalStatus:this.state.maritalStatus, 
      employmentStatus: this.state.status, 
      phone: this.state.phone, 
      email:this.state.email
    });

    if (this.props.createMode) {
      this.props.actions.setNewEmployee(newDetailPerson);
    } else {
      this.props.actions.editEmployee(newDetailPerson);
      console.log(newDetailPerson);
      this.props.actions.setCurrentEmployee(newDetailPerson);
    }
  }
  
  handleCancelClick(){
    this.setState({protectMode:true});
  }

  render(){
    const styleButton = {
      margin: 5,
    };
    let buttons;
    if (!this.props.createMode){
      buttons =(
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--5-col">
          </div>
          <div className="mdl-cell mdl-cell--5-col">
            <RaisedButton label="Edit" primary={true} style={styleButton} disabled={!this.state.protectMode || this.state.id==''} onClick={this.handleEditClick}/>
            <RaisedButton label="Save" primary={true} style={styleButton} disabled={this.state.protectMode} onClick={this.handleSaveClick}/>
            <RaisedButton label="Cancel" secondary={true} style={styleButton} disabled={this.state.protectMode} onClick={this.handleCancelClick}/>
          </div>        
        </div>
      );
    }

    var displayTitle = [];
    if (!this.props.createMode){
      displayTitle.push(<h4 key='emp-detail'>Employee Detail</h4>);
    }

    const maritalLookup=[];
    this.props.lookup.MARITAL.forEach(function(item){
      maritalLookup.push(<MenuItem key={item.id} value={item.dataCode} primaryText={item.dataDesc} />);
    });

    const genderLookup=[];
    this.props.lookup.GENDER.forEach(function(item){
      genderLookup.push(<MenuItem key={item.id} value={item.dataCode} primaryText={item.dataDesc} />);
    });

    const employmentStatusLookup=[];
    this.props.lookup.EMPSTAT.forEach(function(item){
      employmentStatusLookup.push(<MenuItem key={item.id} value={item.dataCode} primaryText={item.dataDesc} />);
    });

    return(
      <div style={styles.FormControl}>
        {displayTitle}  
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--5-col">
            <TextField
              id="firstName"
              hintText="First Name"
              floatingLabelText="First Name"
              value={this.state.firstName}
              onChange={this.handleFirstNameChange}
              disabled={this.state.protectMode}
            />
          </div>
          <div className="mdl-cell mdl-cell--5-col">
            <TextField
              id="lastName"
              hintText="Last Name"
              floatingLabelText="Last Name"
              value={this.state.lastName}
              onChange={this.handleLastNameChange}
              disabled={this.state.protectMode}
            />
          </div>        
        </div>

        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--5-col">
            <TextField
              id="division"
              hintText="Division"
              floatingLabelText="Division"
              value={this.state.division}
              onChange={this.handleDivisionChange}
              disabled={this.state.protectMode}
            />
          </div>
          <div className="mdl-cell mdl-cell--5-col">
            <TextField
              id="subdivision"
              hintText="Sub Division"
              floatingLabelText="Sub Division"
              value={this.state.stream}
              onChange={this.handleStreamChange}
              disabled={this.state.protectMode}
            />
          </div>
        </div>

        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--5-col">
            <SelectField
              id="gender"
              floatingLabelText="Gender"
              value={this.state.gender}
              onChange={(event, index, value)=> this.handleGenderChange(event, index, value)}
              disabled={this.state.protectMode}
            >
              
              {genderLookup}

            </SelectField>
          </div>        
          <div className="mdl-cell mdl-cell--5-col">
            <DatePicker floatingLabelText="Suspend Date" hintText="Suspend Date" 
              value={this.state.suspendDate}
              onChange={(event, date) => this.handleSuspendDate(event,date)} 
              disabled={this.state.protectMode}
            />
          </div>        
        </div>

        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--5-col">
            <DatePicker floatingLabelText="Date of Birth" hintText="Date of Birth" 
            value={this.state.dob}
            onChange={(event, date) => this.handleDobChange(event, date)}
            disabled={this.state.protectMode}
          />
          </div> 
          <div className="mdl-cell mdl-cell--5-col">
            <DatePicker floatingLabelText="Hired Date" hintText="Hired Date" 
            value={this.state.hiredDate}
            onChange={(event, date) => this.handleHiredDate(event, date)} 
            disabled={this.state.protectMode}
          />
          </div> 
        </div>

        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--5-col">
            <TextField
              id="nationality"
              hintText="Nationality"
              floatingLabelText="Nationality"
              value={this.state.nationality}
              onChange={this.handleNationalityChange}
              disabled={this.state.protectMode}
            />
          </div>
          <div className="mdl-cell mdl-cell--5-col">
            <TextField
              id="grade"
              hintText="Grade"
              floatingLabelText="Grade"
              value={this.state.grade}
              onChange={this.handleGradeChange}
              disabled={this.state.protectMode}
            />
          </div>        
        </div>

        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--5-col">
            <SelectField
              floatingLabelText="Marital Status"
              value={this.state.maritalStatus}
              onChange={(event,index, value) => this.handleMaritalChange(event,index,value)}
              disabled={this.state.protectMode}
            >
              {maritalLookup}
            </SelectField>
          </div>
          <div className="mdl-cell mdl-cell--5-col">
            <SelectField
              floatingLabelText="Status"
              value={this.state.status}
              onChange={(event, index, value) => this.handleStatusChange(event, index, value)}
              disabled={this.state.protectMode}
            >
              {employmentStatusLookup}

            </SelectField>
          </div>        
        </div>

        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--5-col">
            <TextField
              id="phone"
              hintText="Phone"
              floatingLabelText="Phone"
              value={this.state.phone}
              onChange={this.handlePhoneChange}
              disabled={this.state.protectMode}
            />
          </div>
          <div className="mdl-cell mdl-cell--5-col">
            <TextField
              id="email"
              hintText="Email"
              floatingLabelText="Email"
              value={this.state.email}
              onChange={this.handleEmailChange}
              disabled={this.state.protectMode}
            />
          </div>        
        </div>
        {buttons}
      </div>
    );
    
    
  }
}

function mapStateToProps(state, ownProps){
    return {
        newEmployee: state.newEmployee,  //state.employees refers to reducers/index.js
        employees: state.employees,
        lookup: state.lookup
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(employeeActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeDetail);