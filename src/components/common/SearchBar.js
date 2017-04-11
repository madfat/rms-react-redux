import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as employeeActions from '../../actions/employeeActions';


class SearchBar extends React.Component{
  constructor(props){
    super(props);
    // this.state = {
    //   keyword: ''
    // }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
//    this.setState({keyword: e.target.value});
    this.props.updateKeyword(e.target.value);
    this.props.actions.findEmployeeByName(e.target.value,0);
  }

  render(){
    return (
      <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right">
        <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="fixed-header-drawer-exp">
          <i className="material-icons">search</i>
        </label>
        <div className="mdl-textfield__expandable-holder">
          <input className="mdl-textfield__input" type="text" name="sample" id="fixed-header-drawer-exp"
            value={this.props.keyword}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
    return {

    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(employeeActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
