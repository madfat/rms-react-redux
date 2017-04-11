import React from 'react';
import TextField from 'material-ui/TextField';
import * as styles from '../common/styles';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton/FlatButton';
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
      location: '',
      state21: [{ value: 'H' }],
      state22: [{ value: 'I' }],
      state23: [{ value: 'G' }]
    };

    this.doSearch = this.doSearch.bind(this);
  }

  componentWillReceiveProps(nextProp){
    this.setState({
      gender: this.props.gender,
      grade: this.props.grade,
      location: this.props.location
    });
  }

  handleSelectChange(e,i,v,field) {
    this.setState({[field]: v});
    // const criteria = {
    //   gender: this.state.gender,
    //   grade: this.state.grade,
    //   location: this.state.location
    // };
    this.props.updateFilter(field, v);
  }

  doSearch(){
    this.props.actions.openFilterDialog(false);
    const filterCriteria = {
      gender: this.props.filter.gender,
      grade: this.props.filter.grade,
      location: this.props.filter.location
    };
    this.props.actions.findEmployeesByFilter(filterCriteria,0);
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

    const locationLookup=[];
    locationLookup.push(<MenuItem key={-1} value={null} primaryText="" />);
    this.props.lookup.LOC.forEach(function(item){
      locationLookup.push(<MenuItem key={item.id} value={item.dataCode} primaryText={item.dataDesc} />);
    });

    const styleButton = {
      margin: 5,
      float: 'right'
    };

    const displayState = state => state.length
      ? [...state].map(({ value, label }) => label || value).join(', ')
      : 'empty state';

    const { state21, state22, state23 } = this.state;

    return(
      <div style={styles.FormControl}>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--6-col">
            <SelectField
              id="gender"
              floatingLabelText="Gender"
              value={this.props.filter.gender}
              onChange={(event, index, value)=> this.handleSelectChange(event, index, value, 'gender')}
              disabled={this.state.protectMode}
            >
              {genderLookup}
            </SelectField>
          </div>
          <div className="mdl-cell mdl-cell--6-col">
            <SelectField
              id="grade"
              floatingLabelText="Grade"
              value={this.props.filter.grade}
              onChange={(event, index, value)=> this.handleSelectChange(event, index, value, 'grade')}
              disabled={this.state.protectMode}
            >
              {gradeLookup}
            </SelectField>
          </div>
          <div className="mdl-cell mdl-cell--6-col">
            <SelectField
              id="Location"
              floatingLabelText="Location"
              value={this.props.filter.location}
              onChange={(event, index, value)=> this.handleSelectChange(event, index, value, 'location')}
              disabled={this.state.protectMode}
            >
              {locationLookup}
            </SelectField>
          </div>


        </div>

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
  lookup: React.PropTypes.object,
  actions: React.PropTypes.object,
  filter: React.PropTypes.object
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