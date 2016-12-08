import React, {PropTypes} from 'react';
import Header from './common/Header';
import Main from './common/Main';

class App extends React.Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--no-drawer-button mdl-layout--fixed-header mdl-color--grey-100 mdl-layout--fixed-tabs">

        <Header />
        <Main />

        {this.props.children}
      </div>
    );
  }
}

App.PropTypes = {
  children: PropTypes.object.isRequired
};

export default App;