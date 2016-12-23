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
      rows: []
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e){
    console.log(e);
    this.props.updatePersonDetail(e);
  }

  updateCounter(e){
    this.props.updateCounter(e)
  }

  render(){
    let rows = [];
    this.props.persons.forEach(function(person) {
      
      let fullName = person.firstName +' '+ person.lastName;
      if (this.props.filterText.length >= 3 && fullName.indexOf(this.props.filterText) === -1){
        return;
      }

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
                  onClick = {this.handleClick.bind(this, person)}
                  key={person.id} />
                  <Divider inset={true} />
                </div>);
    }, this);

    return(
      <List>
        <div style={{overflowY:'scroll', height: '500px'}}>
          {rows}
        </div>
      </List>
    );
  }
}

export default PersonList;