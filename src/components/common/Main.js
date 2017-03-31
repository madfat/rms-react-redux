import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import * as styles from './styles.js';
import PersonsList from './PersonsList';
import SearchBar from './SearchBar';
import Sort from './Sort';
import Filter from './Filter';
import Chip from 'material-ui/Chip';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import ModalEmployee from './ModalEmployee';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import DetailTabs from './DetailTabs';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as employeeActions from '../../actions/employeeActions';

class Main extends React.Component {
  constructor(props){ 
    super(props);  
          
    this.state = {
      filterText:'',
      counterList: 0,
      newEmployee: {},
      SearchResult: [],
      ShowAction: false,
      currentTab:'detail'
    };
    this.handleSave = this.handleSave.bind(this);
    this.handleCancelCreate = this.handleCancelCreate.bind(this);
    this.AddNewEmployeeFinished = this.AddNewEmployeeFinished.bind(this);
    this.setCurrentTab = this.setCurrentTab.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  componentDidMount(){
    this.props.actions.loadEmployeeList();
    this.props.actions.loadLookup('MARITAL');
    this.props.actions.loadLookup('ERROR');
    this.props.actions.loadLookup('GRADE');
    this.props.actions.loadLookup('NATION');
    this.props.actions.loadLookup('EMPSTAT');
    this.props.actions.loadLookup('DEPTYPE');
    this.props.actions.loadLookup('JOBFAM');
    this.props.actions.loadLookup('GENDER');
  }

  handleOpen(){
    this.props.actions.setOpenDialog(true);
    this.setState({ShowAction: false})
  }

  handleSave(){
    const newEmp = this.props.newEmployee;
    this.props.actions.createEmployee(newEmp);
    this.props.actions.setOpenDialog(false);
    this.props.actions.setCurrentEmployee(newEmp);
  }

  handleCancelCreate(){
    this.props.actions.setOpenDialog(false);
  }
  
  AddNewEmployeeFinished(e){
    this.setState({ShowAction: e});
  }

  setCurrentTab(value){
    this.setState({currentTab: value})
  }

  render() {
    const actions = this.state.ShowAction == true ? [
      <FlatButton
        key={'flatbutton-1'}
        label="Save"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleSave}
      />,
    ]
    :
    []
    ;
    return (
      <main className="mdl-layout__content">
        <div className="mdl-grid">

          <div className="mdl-cell mdl-cell--4-col">
            <div className="mdl-sub">
              <div className="mdl-sub__header-row">
                
                <SearchBar
                  filterText={this.state.filterText}
                  onUserInput={this.handleUserInput}
                />

                <div className="mdl-layout-spacer" />

                <Sort />

                <Filter />

                <Chip>{this.state.SearchResult.length}</Chip>
              </div>
            </div>

            <PersonsList />

          </div>

          <div key={'floatingButton-1'}>
            <FloatingActionButton style={styles.ButtonAddEmployee} onTouchTap={this.handleOpen}>
              <ContentAdd />
            </FloatingActionButton>
            <Dialog
              title="Create New Employee"
              actions={actions}
              modal={false}
              open={this.props.openDialog}
              onRequestClose={this.handleCancelCreate}
              contentStyle={styles.ModalEmployee}
              autoScrollBodyContent={true}
            >
              <ModalEmployee
                AddNewEmployeeFinished={this.AddNewEmployeeFinished}
              />
            </Dialog>
          </div>

          <div key={"tabsWrapper"} className="mdl-cell mdl-cell--8-col">
            <DetailTabs 
              setCurrentTab={this.setCurrentTab}
            />
          </div>

        </div>
      </main>
    );
  }
}

Main.propTypes = {
  actions: React.PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps){
    return {
        openDialog: state.openDialog,  //state.openDialog refers to reducers/index.js
        newEmployee: state.newEmployee,
        employees: state.employees,
        lookup: state.lookup
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(employeeActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);