import React, {Component} from 'react'
import store from '../store'
import {getGitHubRepo} from '../api/gitHubAPI'
import {getGitHubData} from '../api/gitHubAPI'

const styles ={
  newButton:{
    height: 35,
    width: 80,
    border:0,
    outline:0,
    background: 'rgb(41,169,69)',
    color: 'white',
    borderRadius:5,
    fontSize:14
  },
  repoInput:{
    height:35,
    width:350,
    outline:0,
    border:'1px solid #666',
    fontSize:14,
    paddingLeft:10,
    background: 'white'

  }
}

class Repo extends Component{
	constructor(props){
	super(props)
	this.state = {
      repo: [],
      user:{}}
}
componentWillMount() {
      this.unsubscribe = store.subscribe(()=>{
          const appState = store.getState()
      this.setState({
            repo: appState.gitHubReducer.repo,
            user: appState.gitHubReducer.user
         
          })
      })
      getGitHubRepo()
    }
    componentWillUnmount() {
      this.unsubscribe()
    }

	render() {
    return (
      <div id="repoMainDiv">
      <main>
          <div id="repoMenu">
            <ul>
              <li>Overview</li>
              <li>Repositories {this.state.user.public_repos}</li>
              <li>Stars 0</li>
              <li>Followers {this.state.user.followers}</li>
              <li>Following {this.state.user.following}</li>
            </ul>
          </div>
          <div>
            <input type="text" placeholder="Seach repositories..." style={styles.repoInput} />
            <select>Type</select>
            <select>language</select>
            <button style={styles.newButton}>New</button>
          </div>
        </main>
          {this.state.repo.slice(0,20).map(info=>{  
            return (
            <div key={info.id} id="repoContainer">
              <h2><a href={info.html_url}>{info.name}</a></h2>
              <p>{info.language}</p>
            </div>
          )})}
      </div>
    	)
    }
}
export default Repo