import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import * as styles from './styles.js';
import PersonsList from './PersonsList';
import SearchBar from './SearchBar';
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
import IconButton from 'material-ui/IconButton';
import ContentFilterList from 'material-ui/svg-icons/content/filter-list';
import ContentSort from 'material-ui/svg-icons/content/sort';
import {white} from 'material-ui/styles/colors';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import Filtering from '../Modal/Filtering';

class Main extends React.Component {
  constructor(props){ 
    super(props);  
          
    this.state = {
      ShowAction: false,
      current: 0,
      showFilter: false,
      keyword: '',
      filter: {grade: '', location: '', gender: ''}
    };
    this.handleSave = this.handleSave.bind(this);
    this.handleCancelCreate = this.handleCancelCreate.bind(this);
    this.AddNewEmployeeFinished = this.AddNewEmployeeFinished.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.onChange = this.onChange.bind(this);
    this.showFilterModal = this.showFilterModal.bind(this);
    this.handleFilterClose = this.handleFilterClose.bind(this);
    this.updateKeyword = this.updateKeyword.bind(this);
    this.updateFilter = this.updateFilter.bind(this);
  }

  componentDidMount(){
    this.props.actions.loadEmployeeList(true,0);
    this.props.actions.loadLookup('MARITAL');
    this.props.actions.loadLookup('ERROR');
    this.props.actions.loadLookup('GRADE');
    this.props.actions.loadLookup('NATION');
    this.props.actions.loadLookup('EMPSTAT');
    this.props.actions.loadLookup('DEPTYPE');
    this.props.actions.loadLookup('JOBFAM');
    this.props.actions.loadLookup('GENDER');
    this.props.actions.loadLookup('LOC');
    this.setState({
      current: this.props.paging.current
    });
  }

  updateKeyword(word){
    this.setState({keyword: word});
  }

  updateFilter(key, value){
    const criteria = this.state.filter;
    criteria[key] = value;
    this.setState({
      filter: criteria
    });
  }

  onChange(current, pageSize) {
    if (this.props.isEmployeesFiltered.byName) {
      this.props.actions.findEmployeeByName(this.state.keyword,current-1);
    }

    if (this.props.isEmployeesFiltered.byFilter) {
      this.props.actions.findEmployeesByFilter(this.state.filter, current-1);
    }

    if (this.props.isEmployeesFiltered.all) {
      this.props.actions.loadEmployeeList(true,current-1);
    }
    
    this.setState({
      current: current
    });
  }

  handleOpen(){
    this.props.actions.setOpenDialog(true);
    this.setState({ShowAction: false});
  }

  handleSave(){
    const newEmp = this.props.newEmployee;
    this.props.actions.createEmployee(newEmp);
    this.props.actions.setOpenDialog(false);
  }

  handleCancelCreate(){
    this.props.actions.setOpenDialog(false);
  }
  
  AddNewEmployeeFinished(e){
    this.setState({ShowAction: e});
  }

  showFilterModal(){
    this.props.actions.openFilterDialog(true);
  }

  handleFilterClose(){
    this.props.actions.openFilterDialog(false);
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
        <Dialog 
          title="Filtering Employee"
          modal={false}
          onRequestClose={this.handleFilterClose}
          autoScrollBodyContent={true}
          open={this.props.openFilter}>
          <Filtering updateFilter={this.updateFilter} filter={this.state.filter} />
        </Dialog>

        <div className="mdl-grid">

          <div className="mdl-cell mdl-cell--4-col">
            <div className="mdl-sub">
              <div className="mdl-sub__header-row">
                
                <SearchBar keyword={this.state.keyword} updateKeyword={this.updateKeyword} />

                <div className="mdl-layout-spacer" />

                <IconButton tooltip="Sort">
                    <ContentSort color={white}/>
                </IconButton>

                <IconButton tooltip="Filtering" onClick={this.showFilterModal}>
                    <ContentFilterList color={white} />
                </IconButton>

                <Chip>{this.props.paging.totalElements}</Chip>
              </div>
            </div>

            <PersonsList />
            <Pagination 
              current={this.state.current}
              className="ant-pagination"
              pageSize={this.props.paging.size} 
              total={this.props.paging.totalElements} 
              onChange={this.onChange}
            />

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
  actions: React.PropTypes.object.isRequired,
  newEmployee: React.PropTypes.object,
  employees: React.PropTypes.array,
  openDialog: React.PropTypes.bool,
  paging: React.PropTypes.object,
  isEmployeesFiltered: React.PropTypes.object,
  openFilter: React.PropTypes.bool
};

function mapStateToProps(state, ownProps){
    return {
        openDialog: state.openDialog,  //state.openDialog refers to reducers/index.js
        newEmployee: state.newEmployee,
        employees: state.employees,
        lookup: state.lookup,
        paging: state.paging,
        openFilter: state.openFilter,
        isEmployeesFiltered: state.isEmployeesFiltered
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(employeeActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);