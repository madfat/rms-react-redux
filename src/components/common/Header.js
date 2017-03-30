import React from 'react';

class Header extends React.Component {
  render (){
    return (
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <a className="mdl-navigation__link" href=""><i className="material-icons">view_headline</i></a>

          <div className="mdl-navigation__link">
            <i className="material-icons md-icon md-48">account_circle</i>
          </div>	
          <div>
          <div>Michael Jacob Hutapea</div>
          <div>SE-AP</div>
          </div>
          
          <div className="mdl-layout-spacer" />
          
          <nav className="mdl-navigation ">
            <a className="mdl-navigation__link" href=""><i className="material-icons">settings</i></a>
            <a className="mdl-navigation__link" href=""><i className="material-icons">power_settings_new</i></a>        
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
