import React from 'react';
import TextField from 'material-ui/TextField';
import * as styles from '../common/styles';

class Dependents extends React.Component{
  render(){
    return(
      <div style={styles.FormControl}>
        <h4>Dependents</h4>
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

export default Dependents;