import React from 'react';
import * as styles from '../common/styles';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import * as Util from '../common/util';

class EmploymentHistory extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      employmentHistories: this.props.employmentHistories || []
    }
  }

  render(){
   let lines = this.props.employmentHistories;

   let lineEmployment = [];
   if (lines != null){
      lines.map((row, index) => {
        lineEmployment.push(
        <div key={row.id}>
          <Divider />
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--3-col" style={{borderRight: '0.25px solid', borderRightColor:'silver', marginLeft:'10px'}}>
              <TextField
                value= {Util.getMonth(row.startDate.getMonth())}
                inputStyle={{textAlign:'left'}}
                style={{width:'50px', fontSize:'10px', height:'15px'}}
                underlineShow={false}
              />
                                    
              <span
                style={{width:'50px'}}
              >       </span>
              <TextField
                hintStyle=''
                style={{width:'100px', fontSize:'10px', height:'15px'}}
                  underlineShow={false}
              />

              <div style={{height:'30px'}}>						
                <TextField
                  value= {row.startDate.getFullYear()}
                  inputStyle={{textAlign:'right'}}
                  style={{width:'50px',height:'20px', fontSize:'20px'}}
                  underlineShow={false}
                />
                <span
                  style={{width:'50px'}}
                >    -    </span>
                
                <TextField
                  value= {isNaN(Date.parse(row.endDate)) ? 'PRESENT':row.endDate.getFullYear()}
                  style={{width:'100px', height:'20px', fontSize:'20px'}}
                  underlineShow={false}
                />
              </div>
              <Divider style={{marginLeft:'60px', marginRight:'20px'}} />
              
              <div style={{height:'100px', float:'right'}}>						
              
                <TextField
                  value= {row.employer}
                  style={{width:'150px', fontSize:'16px', textAlign:'right'}}
                  textareaStyle={{height:'150px'}}
                  underlineShow={false}
                  multiLine
                />
              </div>
            </div>
            <div className="mdl-cell mdl-cell--5-col" style={styles.FormControl}>
              <bold>JOB DESCRIPTION</bold><br />
              {row.jobDesc}
            </div>
          </div>
          <Divider />
        </div>
        );
      });
    } else {
      lineEmployment.push(
        <div key={'noline'}>
          No Employment History
        </div>
      );
   }
    return(
      <div style={styles.FormControl}>
        <h4>Employment History</h4>
        {lineEmployment}
      </div>
    )
  }
}

export default EmploymentHistory;