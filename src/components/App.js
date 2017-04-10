import React from 'react'
import {BrowerRouter as Router, Link, Route} from 'react-router-dom'
import Header from './header'

export default React.createClass({
  render() {
    return (
    	<Router>
      <h1>Hello world</h1>
      <Header />
      </Router>
    )
  }
})