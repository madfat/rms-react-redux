import React from 'react';
import * as styles from '../common/styles';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';

class EmployeeDetail extends React.Component{
  render(){
    return(
      <div style={styles.FormControl}>
        <h4>Employee Detail</h4>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--5-col">
            <TextField
              hintText="First Name"
              floatingLabelText="First Name"
            />
          </div>
          <div className="mdl-cell mdl-cell--5-col">
            <TextField
              hintText="Last Name"
              floatingLabelText="Last Name"
            />
          </div>        
        </div>

        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--5-col">
            <TextField
              hintText="Sub Devision"
              floatingLabelText="Sub Devision"
            />
          </div>
          <div className="mdl-cell mdl-cell--5-col">
            <DatePicker floatingLabelText="Hired Date" hintText="Hired Date" />
          </div>        
        </div>

        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--5-col">
            <TextField
              hintText="First Name"
              floatingLabelText="First Name"
            />
          </div>
          <div className="mdl-cell mdl-cell--5-col">
            <TextField
              hintText="Last Name"
              floatingLabelText="Last Name"
            />
          </div>        
        </div>

        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--5-col">
            <TextField
              hintText="First Name"
              floatingLabelText="First Name"
            />
          </div>
          <div className="mdl-cell mdl-cell--5-col">
            <TextField
              hintText="Last Name"
              floatingLabelText="Last Name"
            />
          </div>        
        </div>

        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--5-col">
            <TextField
              hintText="First Name"
              floatingLabelText="First Name"
            />
          </div>
          <div className="mdl-cell mdl-cell--5-col">
            <TextField
              hintText="Last Name"
              floatingLabelText="Last Name"
            />
          </div>        
        </div>
      </div>
    );
  }
}

export default EmployeeDetail;