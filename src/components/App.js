import React from 'react'
// import {BrowerRouter as Router} from 'react-router-dom'
import Header from './header'
import Repo from './repo'
import Main from './main'
import Footer from './footer'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default React.createClass({

  render() {
    injectTapEventPlugin()
    return (
    <MuiThemeProvider>
    <div>
     <Header />
     <Main />
     <Repo />
     <Footer />
     </div>
     </MuiThemeProvider>
      
    )
  }
})