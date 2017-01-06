import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import TextField from 'material-ui/TextField';
import EmployeeDetail from '../EmployeeDetail/EmployeeDetail';
import * as styles from './styles';

class ModalEmployee extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      finished: false,
      stepIndex: 0,
      newEmployee:{}
    };

    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.getStepContent = this.getStepContent.bind(this);
    this.renderContent = this.renderContent.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
  }

  handleNext(){
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 5,
    });
  }

  handlePrev() {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
        this.setState({stepIndex: stepIndex - 1});
    }
  }

  handleFirstNameChange(e){
    this.setState({firstName: e.target.value});
    let newEmpl = Object.assign(this.state.newEmployee, {
      firstName: e.target.value
    });
    this.props.updateNewEmployee(newEmpl);
  }

  handleLastNameChange(e){
    this.setState({lastName: e.target.value});
    this.props.updateNewEmployee(Object.assign(this.state.newEmployee, {lastName:e.target.value}));
  }

  getStepContent(stepIndex) {
    let newEmployee = this.state.newEmployee;
    switch (stepIndex) {
      case 0:
        return (
          <div style={styles.FormControl}>
            <p>Employee Detail</p>
            <TextField
              hintText="First Name"
              floatingLabelText="First Name"
              value={newEmployee.firstName}
              onChange={this.handleFirstNameChange}
            />
            <TextField
              hintText="Last Name"
              floatingLabelText="First Name"
              value={newEmployee.lastName}
              onChange={this.handleLastNameChange}
            />
          </div>
        );
      case 1:
        return (
          <p>Grades History</p>
        );
      case 2:
        return (
          <p>Employment History</p>
        );
      case 3:
        return (
          <p>Dependents</p>
        );
      case 4:
        return (
          <p>Address</p>
        );
      case 5:
        return (
          <p>Location</p>
        );
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

  renderContent() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px', overflow: 'hidden'};

    if (finished) {
      return (
        <div style={contentStyle}>
          <p>To save the new employee, press Save.</p>
        </div>
      );
    }
    return (
      <div style={contentStyle}>
        <div>{this.getStepContent(stepIndex)}</div>
        <div style={{marginTop: 24, marginBottom: 12}}>
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            onTouchTap={this.handlePrev}
            style={{marginRight: 12}}
          />
          <RaisedButton
            label={stepIndex === 5 ? 'Finish' : 'Next'}
            primary={true}
            onTouchTap={this.handleNext}
          />
        </div>
      </div>
    );
  }

  render(){
    const {loading, stepIndex} = this.state;
    return (
      <div style={{width: '100%', maxWidth: 'none', margin: 'auto'}}>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>Employee Detail</StepLabel>
          </Step>
          <Step>
            <StepLabel>Grades History</StepLabel>
          </Step>
          <Step>
            <StepLabel>Employment History</StepLabel>
          </Step>
          <Step>
            <StepLabel>Dependents</StepLabel>
          </Step>
          <Step>
            <StepLabel>Address</StepLabel>
          </Step>
          <Step>
            <StepLabel>Location</StepLabel>
          </Step>
        </Stepper>
        <ExpandTransition loading={loading} open={true}>
          {this.renderContent()}
        </ExpandTransition>
      </div>
    );
  }
}

export default ModalEmployee;