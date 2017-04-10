import React from 'react'
import store from '../store'


class Header extends React.Component{
	constructor(){
	super()
	this.state = {user: {}}
}

	render() {
    return (
      <div>
        <h1>{this.user.name}</h1>
      </div>
    	)
    }
}
export default Header
