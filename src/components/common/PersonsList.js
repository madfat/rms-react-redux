import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import * as styles from './styles';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import ModalEmployee from './ModalEmployee';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';

class PersonList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      open: false,

    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  
  handleOpen(){
    this.setState({open: true});
  }
  
  handleClose(){
    this.setState({open: false});
  }

  render(){

    const actions = [
      <FlatButton
        label="Save"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    var rows = [];
    this.props.persons.forEach(function(person) {
      rows.push(<div><ListItem 
                  leftAvatar={<Avatar src={require('../../img/test.png')} />}
                  rightIconButton={<i className="material-icons">radio_button_checked</i>}
                  primaryText={person.firstName + ' ' + person.lastName}
                  secondaryText={
                    <p>
                      <span>{person.division + '-' + person.grade + ', ' + person.stream + ' ' + person.jobFamily}</span><br />
                      <small>{person.location + ', ' + person.phone}</small>
                    </p>
                  }
                  secondaryTextLines={2}
                  key={person.id} />
                  <Divider inset={true} />
                  </div>);
    });

    return(
      <List>
        {rows}
        <div>
          <FloatingActionButton style={styles.ButtonAddEmployee} onTouchTap={this.handleOpen}>
            <ContentAdd />
          </FloatingActionButton>
          <Dialog
            title="Create New Employee"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
            contentStyle={styles.ModalEmployee}
            autoScrollBodyContent={true}
          >
            <ModalEmployee />
          </Dialog>
        </div>
      </List>
    );
  }
}

export default PersonList;