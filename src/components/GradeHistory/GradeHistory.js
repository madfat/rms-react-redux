import React from 'react';
import * as styles from '../common/styles';
import TextField from 'material-ui/TextField';

class GradeHistory extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div style={styles.FormControl}>
        <h4>Grades History</h4>
        <div className="mdl-grid">
          No Grade History
        </div>
      </div>
    );
  }
}

export default GradeHistory;