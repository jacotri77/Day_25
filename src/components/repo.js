import React, {Component} from 'react'
import store from '../store'
import {getGitHubRepo} from '../api/gitHubAPI'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'


const styles = {
  customWidth: {
    width: 150,
  }
}

class Repo extends Component{
	constructor(props){
	super(props)
	this.state = {
      repo: [],
      user:{},
      value:1,
    }
}
 handleChange = (event, index, value) => this.setState({value})
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
          <div id="repoMenu">
            <ul>
              <li>Overview</li>
              <li>Repositories {this.state.user.public_repos}</li>
              <li>Stars 0</li>
              <li>Followers {this.state.user.followers}</li>
              <li>Following {this.state.user.following}</li>
            </ul>
          </div>
        <div id="inputContainer">
          <input type="text" placeholder="Seach repositories..." id="repoInput" />
          <SelectField floatingLabelText="Type:" value={this.state.value} onChange={this.handleChange} style={styles.customWidth} id="selects">
            <MenuItem value={1} primaryText="All" />
            <MenuItem value={2} primaryText="Public" />
            <MenuItem value={3} primaryText="Private" />
            <MenuItem value={4} primaryText="Sources" />
            <MenuItem value={5} primaryText="Forks" />
            <MenuItem value={5} primaryText="Mirrors" />
          </SelectField>
          <SelectField floatingLabelText="Language:" value={this.state.value} onChange={this.handleChange} style={styles.customWidth} id="selectsLang">
            <MenuItem value={1} primaryText="All" />
            <MenuItem value={2} primaryText="CSS" />
            <MenuItem value={3} primaryText="HTML" />
            <MenuItem value={4} primaryText="JavaScript" />
          </SelectField>
        <button id="newButton">New</button>
        </div>
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