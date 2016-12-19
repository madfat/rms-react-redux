import React from 'react';
import * as styles from '../common/styles';
import TextField from 'material-ui/TextField';

class EmploymentHistory extends React.Component{
  render(){
    return(
      <div style={styles.FormControl}>
        <h4>Employment History</h4>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--5-col">
            <TextField
              hintText="Hint Text"
              floatingLabelText="Floating Label Text"
            />
          </div>
          <div className="mdl-cell mdl-cell--5-col">
            <TextField
              hintText="Hint Text"
              floatingLabelText="Floating Label Text"
            />
          </div>        
        </div>
      </div>
    );
  }
}

export default EmploymentHistory;