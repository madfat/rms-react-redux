import React from 'react';
import * as styles from '../common/styles';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import * as Util from '../common/util';

class Location extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      locationHistory: this.props.locationHistory || []
    }
  }

  render(){
    let lines = this.props.locationHistory;

    let lineLocation = [];
    if (lines != null) {
      lines.map((line,index) => {
        lineLocation.push(
          <div key={line.id} style={styles.FormControl}>
            <div>
              <Divider />
              <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--3-col" style={{borderRight: '0.25px solid', borderRightColor:'silver', marginLeft:'10px'}}>
                  <TextField
                    id="startDate"
                    inputStyle={{textAlign:'left'}}
                    style={{width:'50px', fontSize:'10px', height:'15px'}}
                    underlineShow={false}
                  />
                                        
                  <span
                    style={{width:'50px'}}
                  >       </span>
                  <TextField
                    id="endDate"
                    style={{width:'100px', fontSize:'10px', height:'15px'}}
                      underlineShow={false}
                  />

                  <div style={{height:'30px'}}>						
                    <TextField
                      id="startYear"
                      inputStyle={{textAlign:'left'}}
                      style={{width:'50px',height:'20px', fontSize:'20px'}}
                      underlineShow={false}
                    />
                    <span
                      style={{width:'50px'}}
                    >    -    </span>
                    
                    <TextField
                      id="endYear"
                      style={{width:'100px', height:'20px', fontSize:'20px'}}
                      underlineShow={false}
                    />
                  </div>
                  <Divider style={{marginLeft:'60px', marginRight:'20px'}} />
                </div>
                <div className="mdl-cell mdl-cell--9-col" style={styles.FormControl}>
                  <TextField
                    id="location"
                    floatingLabelText="Office Location"
                    value= {line.branchOffice}
                    style={{width:'95%', fontSize:'16px', textAlign:'left'}}
                    textareaStyle={{height:'30px'}}
                    underlineShow={true}
                  />
                  <TextField
                    id="address"
                    floatingLabelText="Address"
                    value= {line.address}
                    style={{width:'95%', fontSize:'16px', textAlign:'left'}}
                    textareaStyle={{height:'50px'}}
                    underlineShow={false}
                    multiLine
                  />
                </div>
              </div>
              <Divider />
            </div>
          </div>
        );
      });
    } else {
      lineLocation.push(
        <div key={'noline'}>
          No Relocation History
        </div>
      );
    }
    return(
      <div style={styles.FormControl}>
        <h4>Relocation History</h4>
        {lineLocation}
      </div>
    );
  }
}

export default Location;