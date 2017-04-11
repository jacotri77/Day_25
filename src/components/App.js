import React from 'react'
// import {BrowerRouter as Router} from 'react-router-dom'
import Header from './header'
import Repo from './repo'
import Main from './main'

export default React.createClass({
  render() {
    return (
    <div>
     <Header />
     <Main />
     <Repo />
     </div>
      
    )
  }
})