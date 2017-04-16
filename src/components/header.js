import React, {Component} from 'react'
import store from '../store'
import {getGitHubData} from '../api/gitHubAPI'

const styles ={
  headBlock:{
    height: 50,
    width: '100%',
    background: 'rgb(36,41,46)',
    color: 'rgb(200,201,203)',
    

  },
  headInput:{
    height:35,
    width:300,
    outline:0,
    border:0,
    fontSize:14,
    paddingLeft:10,
    background: 'rgb(63,67,71)',
    marginLeft: 30

  }
}

class Header extends Component{
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
      <div style={styles.headBlock}>
          <img src={require('../images/GitHubSmall.png')} alt="GitHub Logo" id="gitHeadLogo"/>
          <input type="text" placeholder="Search GitHub" style={styles.headInput}/>
          <span className="headerSpan">Pull requests</span>
          <span className="headerSpan">Issues</span>
          <span className="headerSpan">Gist</span>
          <div id="rightHeaderSpan">
          <span>+</span>
          <img src={this.state.user.avatar_url} id="smallAvatarDiv" alt="Erik Jacobsen"/>
          </div>
      </div>

    	)
    }
}
export default Header

