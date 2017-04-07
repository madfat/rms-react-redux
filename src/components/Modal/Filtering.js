import React from 'react';
import TextField from 'material-ui/TextField';
import * as styles from '../common/styles';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton/FlatButton'
import RaisedButton from 'material-ui/RaisedButton';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as employeeActions from '../../actions/employeeActions';

import SuperSelectField from 'material-ui-superselectfield';

class Filtering extends React.Component{ 
  constructor(props){
    super(props);
    this.state = {
      gender: '',
      grade:'',
      state21: [{ value: 'H' }],
      state22: [{ value: 'I' }],
      state23: [{ value: 'G' }]
    };
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.doSearch = this.doSearch.bind(this);
  }

  handleGenderChange(e,i,v){
    this.setState({gender: v});
  }
  
  handleGradeChange(e,i,v){
    this.setState({grade: v});
  }

  doSearch(){
    this.props.actions.openFilterDialog(false);
  }

  handleSelection (values, name) { 
    this.setState({ [name]: values });
  }

  render(){
    const genderLookup=[];
    genderLookup.push(<MenuItem key={-1} value={null} primaryText="" />);
    this.props.lookup.GENDER.forEach(function(item){
      genderLookup.push(<MenuItem key={item.id} value={item.dataCode} primaryText={item.dataDesc} />);
    });

    const gradeLookup=[];
    gradeLookup.push(<MenuItem key={-1} value={null} primaryText="" />);
    this.props.lookup.GRADE.forEach(function(item){
      gradeLookup.push(<MenuItem key={item.id} value={item.dataCode} primaryText={item.dataDesc} />);
    });

    const styleButton = {
      margin: 5,
      float: 'right'
    };

    const displayState = state => state.length
      ? [...state].map(({ value, label }) => label || value).join(', ')
      : 'empty state'

    const { state21, state22, state23 } = this.state;
    console.debug('state21', state21, '\nstate22', state22, '\nstate23', state23)

    return(
      <div style={styles.FormControl}>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--6-col">
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
          <div className="mdl-cell mdl-cell--6-col">
            <SelectField
              id="grade"
              floatingLabelText="Grade"
              value={this.state.grade}
              onChange={(event, index, value)=> this.handleGradeChange(event, index, value)}
              disabled={this.state.protectMode}
            >
              {gradeLookup}
            </SelectField>
          </div>
        </div>
        <SuperSelectField
          name='state21'
          multiple
          checkPosition='left'
          hintText='Multiple values'
          onChange={this.handleSelection}
          value={state21}
          style={{ minWidth: 150, marginRight: 40 }}
          elementHeight={[36, 68, 36]}
        >
          <div value='G'>Option G</div>
          <div value='H'>Option H super longue</div>
          <div value='I'>Option I</div>
        </SuperSelectField>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--12-col">
            <RaisedButton label="Search" primary={true} style={styleButton} onClick={this.doSearch} />
          </div>
        </div>
      </div>
    );
  }
}

Filtering.propTypes = {
  lookup: React.PropTypes.object
};

function mapStateToProps(state, ownProps){
    return {
        lookup: state.lookup
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(employeeActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filtering);