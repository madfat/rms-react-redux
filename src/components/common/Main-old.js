import React from 'react';
import { DatePicker } from 'react-mdl-datepicker';
import moment from 'moment';
import DatePicker1 from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class Main extends React.Component {
  constructor(props){ 
    super(props);  
    this.handleChange = this.handleChange.bind(this);         
    this.state = {
      value: 2
    };

  }


  handleChange(event, index, value){
    this.setState({value: value}); 
  }


  render() {
    return (
      <main className="mdl-layout__content">
        <div className="mdl-grid">

          <div className="mdl-cell mdl-cell--4-col">
            <div className="mdl-sub">
              <div className="mdl-sub__header-row">

                <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right">
                  <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="fixed-header-drawer-exp">
                    <i className="material-icons">search</i>
                  </label>
                  <div className="mdl-textfield__expandable-holder">
                    <input className="mdl-textfield__input" type="text" name="sample" id="fixed-header-drawer-exp" />
                  </div>
                </div>
                <div className="mdl-layout-spacer" />
                <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="fixed-header-drawer-exp">
                  <i className="material-icons">sort</i>
                </label>
                <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="fixed-header-drawer-exp">
                  <i className="material-icons">filter_list</i>
                </label>
                <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="fixed-header-drawer-exp">
                  <i className="material-icons">more_vert</i>
                  
                </label>

              </div>
            </div>
            <div>
            <ul className="demo-list-three mdl-list">
              <li className="mdl-list__item mdl-list__item--three-line">
                <span className="mdl-list__item-primary-content">
                  <i className="material-icons mdl-list__item-avatar">person</i>
                  <span>Bryan Cranston</span>
                  <span className="mdl-list__item-text-body">
                    Bryan Cranston played the role of Walter in Breaking Bad. He is also known
                    for playing Hal in Malcom in the Middle.
                  </span>
                </span>
                <span className="mdl-list__item-secondary-content">
                  <a className="mdl-list__item-secondary-action" href="#"><i className="material-icons">star</i></a>
                </span>
              </li>
              <li className="mdl-list__item mdl-list__item--three-line">
                <span className="mdl-list__item-primary-content">
                  <i className="material-icons  mdl-list__item-avatar">person</i>
                  <span>Aaron Paul</span>
                  <span className="mdl-list__item-text-body">
                    Aaron Paul played the role of Jesse in Breaking Bad. He also featured in
                    the "Need For Speed" Movie.
                  </span>
                </span>
                <span className="mdl-list__item-secondary-content">
                  <a className="mdl-list__item-secondary-action" href="#"><i className="material-icons">star</i></a>
                </span>
              </li>
              <li className="mdl-list__item mdl-list__item--three-line">
                <span className="mdl-list__item-primary-content">
                  <i className="material-icons  mdl-list__item-avatar">person</i>
                  <span>Bob Odenkirk</span>
                  <span className="mdl-list__item-text-body">
                    Bob Odinkrik played the role of Saul in Breaking Bad. Due to public fondness for the
                    character, Bob stars in his own show now, called "Better Call Saul".
                  </span>
                </span>
                <span className="mdl-list__item-secondary-content">
                  <a className="mdl-list__item-secondary-action" href="#"><i className="material-icons">star</i></a>
                </span>
              </li>
            </ul>
            </div>
          </div>

          <div className="mdl-cell mdl-cell--8-col">
            <div className=" mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
              <div className="mdl-tabs__tab-bar">
                <a href="#tab-1" className="mdl-tabs__tab is-active"><i className="material-icons">person</i></a>
                <a href="#tab-2" className="mdl-tabs__tab"><i className="material-icons">history</i></a>
                <a href="#tab-3" className="mdl-tabs__tab"><i className="material-icons">grade</i></a>
                <a href="#tab-4" className="mdl-tabs__tab"><i className="material-icons">people</i></a>
                <a href="#tab-5" className="mdl-tabs__tab"><i className="material-icons">home</i></a>
                <a href="#tab-6" className="mdl-tabs__tab"><i className="material-icons">location_on</i></a>
              </div>

              <div className="mdl-tabs__panel is-active" id="tab-1">
                <div className="page-content">
                  <div className="mdl-avatar mdl-js-avatar mdl-avatar--floating-label">
                      <input className="mdl-avatar__input" type="text" name="profile_image" id="profile_image" value="img/avatars/default1.png" />
                      <label className="mdl-avatar__label" htmlFor="profile_image">Profile Image</label>
                  </div>
                  <DatePicker1 hintText="Portrait Dialog" />
                  <TextField
                    hintText="Hint Text"
                    floatingLabelText="Floating Label Text"
                  />

                <SelectField
                  floatingLabelText="Frequency"
                  value={this.state.value}
                  onChange={this.handleChange}
                >
                  <MenuItem value={1} primaryText="Never" />
                  <MenuItem value={2} primaryText="Every Night" />
                  <MenuItem value={3} primaryText="Weeknights" />
                  <MenuItem value={4} primaryText="Weekends" />
                  <MenuItem value={5} primaryText="Weekly" />
                </SelectField>
                
                  <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--5-col">
                      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input" type="text" id="firstName" />
                        <label className="mdl-textfield__label" htmlFor="firstName">First Name</label>
                      </div>
                     </div>
                    <div className="mdl-cell mdl-cell--5-col">
                      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input" type="text" id="subDivision" />
                        <label className="mdl-textfield__label" htmlFor="subDivision">Sub Division</label>
                      </div>
                    </div>
                  </div>

                  <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--5-col">
                      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input" type="text" id="lastName" />
                        <label className="mdl-textfield__label" htmlFor="lastName">Last Name</label>
                      </div>
                    </div>
                    <div className="mdl-cell mdl-cell--5-col">
                      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input" type="text" id="status" />
                        <label className="mdl-textfield__label" htmlFor="status">Status</label>
                      </div>
                    </div>
                  </div>

                  <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--5-col">
                      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input" type="text" id="gender" />
                        <label className="mdl-textfield__label" htmlFor="gender">Gender</label>
                      </div>
                    </div>
                    <div className="mdl-cell mdl-cell--5-col">
                      <DatePicker
                        id="suspendDate"
                        label="Suspend Date"
                        maxDate={moment()}
                        onChange={() => {}}
                      />
                    </div>
                  </div>

                  <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--5-col">
                      <DatePicker
                        id="dob"
                        label="Date of Birth"
                        maxDate={moment()}
                        onChange={() => {}}
                      />
                    </div>
                    <div className="mdl-cell mdl-cell--5-col">
                      <DatePicker
                        id="hireDate"
                        label="Hired Date"
                        maxDate={moment()}
                        onChange={() => {}}
                      />
                    </div>
                  </div>

                  <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--5-col">
                      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input" type="text" id="nationality" />
                        <label className="mdl-textfield__label" htmlFor="nationality">Nationality</label>
                      </div>
                    </div>
                    <div className="mdl-cell mdl-cell--5-col">
                      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input" type="text" id="grade" />
                        <label className="mdl-textfield__label" htmlFor="grade">Grade</label>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="mdl-tabs__panel" id="tab-2">
                <div className="page-content">
                  <ul>
                    <li>History tab</li>
                    <li>
                      test
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mdl-tabs__panel" id="tab-3">
                <div className="page-content">
                  <ul>
                    <li>Grade tab</li>
                  </ul>
                </div>
              </div>
              <div className="mdl-tabs__panel" id="tab-4">
                <div className="page-content">
                  <ul>
                    <li>People tab</li>
                  </ul>
                </div>
              </div>
              <div className="mdl-tabs__panel" id="tab-5">
                <div className="page-content">
                  <ul>
                    <li>Home tab</li>
                  </ul>
                </div>
              </div>
              <div className="mdl-tabs__panel" id="tab-6">
                <div className="page-content">
                  <ul>
                    <li>Location tab</li>
                  </ul>
                  <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
                    <i className="material-icons">add</i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;