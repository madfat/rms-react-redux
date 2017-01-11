import React from 'react';
import * as styles from '../common/styles';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

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
      marital:'', 
      status: '', 
      phone:'', 
      email:'',
      protectMode: this.props.createMode==true?false:true,
      newEmployee:{}
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
      id: nextProps.person.id||'',
      firstName: nextProps.person.firstName||'' ,
      lastName: nextProps.person.lastName || '' ,
      division: nextProps.person.division || '',
      stream: nextProps.person.stream || '', 
      gender: nextProps.person.gender || '',
      hiredDate: nextProps.person.hiredDate || {},
      suspendDate: nextProps.person.suspendDate || {},
      dob: nextProps.person.dob || {},
      nationality: nextProps.person.nationality || '',
      grade: nextProps.person.grade || '',
      marital: nextProps.person.marital || '',
      status: nextProps.person.status || '',
      phone: nextProps.person.phone || '',
      email: nextProps.person.email || ''
    });
  }

  handleStatusChange(e,i,v){
    this.setState({status: v});
    if (this.props.createMode){
      this.updateNewEmployee('status', v);
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
      this.updateNewEmployee('suspendDate', d);
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
    this.setState({marital: v});
    if (this.props.createMode){
      this.updateNewEmployee('marital', v);
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
    // console.log('==in detail==');
    // console.log(this.state.newEmployee);
    let a = this.state.newEmployee;
    this.props.updateNewEmployee(Object.assign(this.props.person, {a}));
  }

  handleSaveClick(){
    this.setState({protectMode: true});
    let newDetailPerson = Object.assign(this.props.person, {
      firstName: this.state.firstName,
      lastName: this.state.lastName, 
      division: this.state.division, 
      stream: this.state.stream, 
      gender: this.state.gender,
      hiredDate: this.state.hiredDate,
      suspendDate: this.state.suspendDate, 
      dob:this.state.dob, 
      nationality: this.state.nationality, 
      grade: this.state.grade, 
      marital:this.state.marital, 
      status: this.state.status, 
      phone: this.state.phone, 
      email:this.state.email
    });
    this.props.updatePersonDetail(newDetailPerson);
  }
  
  handleCancelClick(){
    this.setState({protectMode:true,
      firstName: this.props.person.firstName});
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
    return(
      <div style={styles.FormControl}>
        <h4>Employee Detail</h4>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--5-col">
            <TextField
              hintText="First Name"
              floatingLabelText="First Name"
              value={this.state.firstName}
              onChange={this.handleFirstNameChange}
              disabled={this.state.protectMode}
            />
          </div>
          <div className="mdl-cell mdl-cell--5-col">
            <TextField
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
              hintText="Division"
              floatingLabelText="Division"
              value={this.state.division}
              onChange={this.handleDivisionChange}
              disabled={this.state.protectMode}
            />
          </div>
          <div className="mdl-cell mdl-cell--5-col">
            <TextField
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
              floatingLabelText="Gender"
              value={this.state.gender}
              onChange={(event, index, value)=> this.handleGenderChange(event, index, value)}
              disabled={this.state.protectMode}
            >
              <MenuItem value={1} primaryText="" />
              <MenuItem value={2} primaryText="Male" />
              <MenuItem value={3} primaryText="Female" />
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
              hintText="Nationality"
              floatingLabelText="Nationality"
              value={this.state.nationality}
              onChange={this.handleNationalityChange}
              disabled={this.state.protectMode}
            />
          </div>
          <div className="mdl-cell mdl-cell--5-col">
            <TextField
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
              value={this.state.marital}
              onChange={(event,index, value) => this.handleMaritalChange(event,index,value)}
              disabled={this.state.protectMode}
            >
              <MenuItem value={1} primaryText="" />
              <MenuItem value={2} primaryText="Single" />
              <MenuItem value={3} primaryText="Merried" />
              <MenuItem value={4} primaryText="Widowed/Widower" />
            </SelectField>
          </div>
          <div className="mdl-cell mdl-cell--5-col">
            <SelectField
              floatingLabelText="Status"
              value={this.state.status}
              onChange={(event, index, value) => this.handleStatusChange(event, index, value)}
              disabled={this.state.protectMode}
            >
              <MenuItem value={1} primaryText="" />
              <MenuItem value={2} primaryText="Permanent" />
              <MenuItem value={3} primaryText="Contract" />
            </SelectField>
          </div>        
        </div>

        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--5-col">
            <TextField
              hintText="Phone"
              floatingLabelText="Phone"
              value={this.state.phone}
              onChange={this.handlePhoneChange}
              disabled={this.state.protectMode}
            />
          </div>
          <div className="mdl-cell mdl-cell--5-col">
            <TextField
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

export default EmployeeDetail;