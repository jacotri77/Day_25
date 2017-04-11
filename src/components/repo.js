import React, {Component} from 'react'
import store from '../store'
import {getGitHubRepo} from '../api/gitHubAPI'


class Repo extends Component{
	constructor(props){
	super(props)
	this.state = {repo: {}}
}
componentWillMount() {
      this.unsubscribe = store.subscribe(()=>{
          const appState = store.getState()
      this.setState({
            repo: appState.gitHubReducer.repo
         
          })
      })
      getGitHubRepo()
    }
    componentWillUnmount() {
      this.unsubscribe()
    }

	render() {
    return (
      <div>
          <h1>Hello </h1>
          
            <h1>{this.state.repo.full_name}</h1>
        
        
      </div>
    	)
    }
}
export default Repo