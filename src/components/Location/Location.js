import React from 'react';
import * as styles from '../common/styles';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';

class Location extends React.Component{
  render(){
    return(
      <div style={styles.FormControl}>
        <h4>Location History</h4>
        <div>
          <Divider />
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--3-col" style={{borderRight: '0.25px solid', borderRightColor:'silver', marginLeft:'10px'}}>
              <TextField
                value= 'January'
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
                  value= '2015'
                  inputStyle={{textAlign:'left'}}
                  style={{width:'50px',height:'20px', fontSize:'20px'}}
                  underlineShow={false}
                />
                <span
                  style={{width:'50px'}}
                >    -    </span>
                
                <TextField
                  value= {true? 'PRESENT':''}
                  style={{width:'100px', height:'20px', fontSize:'20px'}}
                  underlineShow={false}
                />
              </div>
              <Divider style={{marginLeft:'60px', marginRight:'20px'}} />
            </div>
            <div className="mdl-cell mdl-cell--9-col" style={styles.FormControl}>
              <TextField
                floatingLabelText="Office Location"
                value= 'Bali'
                style={{width:'95%', fontSize:'16px', textAlign:'left'}}
                textareaStyle={{height:'30px'}}
                underlineShow={true}
              /><br />
              <TextField
                floatingLabelText="Address"
                value= 'Jl. By Pass Ngurah Rai gg. Mina Utama No. 1 Suwung 80223, Bali'
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
  }
}

export default Location;