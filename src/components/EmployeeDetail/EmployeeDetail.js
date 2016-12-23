import React from 'react';
import * as styles from '../common/styles';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class EmployeeDetail extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    if(this.props.person != null) {
      return(
        <div style={styles.FormControl}>
          <h4>Employee Detail</h4>
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--5-col">
              <TextField
                hintText="First Name"
                floatingLabelText="First Name"
                value={this.props.person.firstName}
              />
            </div>
            <div className="mdl-cell mdl-cell--5-col">
              <TextField
                hintText="Last Name"
                floatingLabelText="Last Name"
                value={this.props.person.lastName}
              />
            </div>        
          </div>

          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--5-col">
              <TextField
                hintText="Division"
                floatingLabelText="Division"
                value={this.props.person.division}
              />
            </div>
            <div className="mdl-cell mdl-cell--5-col">
              <TextField
                hintText="Sub Division"
                floatingLabelText="Sub Division"
                value={this.props.person.stream}
              />
            </div>
          </div>

          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--5-col">
              <SelectField
                floatingLabelText="Gender"
                value={this.props.person.gender}
                onChange={this.handleChange}
              >
                <MenuItem value={1} primaryText="" />
                <MenuItem value={2} primaryText="Male" />
                <MenuItem value={3} primaryText="Female" />
              </SelectField>
            </div>        
            <div className="mdl-cell mdl-cell--5-col">
              <DatePicker floatingLabelText="Suspend Date" hintText="Suspend Date" 
              value={this.props.person.hiredDate}/>
            </div>        
          </div>

          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--5-col">
              <DatePicker floatingLabelText="Date of Birth" hintText="Date of Birth" 
              value={this.props.person.dob}/>
            </div> 
            <div className="mdl-cell mdl-cell--5-col">
              <DatePicker floatingLabelText="Hired Date" hintText="Hired Date" 
              value={this.props.person.hiredDate}/>
            </div> 
          </div>

          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--5-col">
              <TextField
                hintText="Nationality"
                floatingLabelText="Nationality"
                value={this.props.person.nationality}
              />
            </div>
            <div className="mdl-cell mdl-cell--5-col">
              <TextField
                hintText="Grade"
                floatingLabelText="Grade"
                value={this.props.person.grade}
              />
            </div>        
          </div>

          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--5-col">
              <SelectField
                floatingLabelText="Marital Status"
                value={this.props.person.marital}
                onChange={this.handleChange}
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
                value={this.props.person.status}
                onChange={this.handleChange}
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
                value={this.props.person.phone}
              />
            </div>
            <div className="mdl-cell mdl-cell--5-col">
              <TextField
                hintText="Email"
                floatingLabelText="Email"
                value={this.props.person.email}
              />
            </div>        
          </div>

        </div>
      );
    } else {
      return (
        <div>...</div>
      );
    }
    
    
  }
}

export default EmployeeDetail;