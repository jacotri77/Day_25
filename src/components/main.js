import React, {Component} from 'react'
import store from '../store'
import {getGitHubData} from '../api/gitHubAPI'

const styles ={
  profilePic:{
    height: 250,
    width: 250,
 
  }
}
class Main extends Component{
	constructor(props){
	super(props)
	this.state = {user: {}}
}
componentWillMount() {
      this.unsubscribe = store.subscribe(()=>{
          const appState = store.getState()
      this.setState({
            user: appState.gitHubReducer.user
         
          })
      })
      getGitHubData()
    }
    componentWillUnmount() {
      this.unsubscribe()
    }

	render() {
    return (
      <div>
          <img src={this.state.user.avatar_url} alt="Erik Jacobsen" style={styles.profilePic} />
          <h1>{this.state.user.name}</h1>
          <span>{this.state.user.login}</span>
        <footer id="mainFoot"> 
          <span>&copy; GitHub, inc.</span>
          <ul>
            <li href="#">Terms</li>
            <li href="#">Privacy</li>
            <li href="#">Security</li>
            <li href="#">Status</li>
            <li href="#">Help</li>
          </ul>
          <img src={require('../images/GitHub-Mark-32px.png')} alt="GitHub Logo" id="mainGitLogo"/>
          <ul>
            <li>Contact GitHub</li>
            <li>API</li>
            <li>Training</li>
            <li>Shop</li>
            <li>Blog</li>
            <li>About</li>
          </ul>
        </footer>
      </div>
    	)
    }
}
export default Main
