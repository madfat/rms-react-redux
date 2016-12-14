import React, {PropTypes} from 'react';
import Header from './common/Header';
import Main from './common/Main';
// For Customization Options, edit  or use
// './src/material_ui_raw_theme_file.jsx' as a template.
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import theme from './src/material_ui_raw_theme_file'

class App extends React.Component {
  render() {
    return (
    <MuiThemeProvider>
      <div className="mdl-layout mdl-js-layout mdl-layout--no-drawer-button mdl-layout--fixed-header mdl-color--grey-100 mdl-layout--fixed-tabs">

        <Header />
        <Main />

        {this.props.children}
      </div>
    </MuiThemeProvider>
    );
  }
}

App.PropTypes = {
  children: PropTypes.object.isRequired
};

export default App;