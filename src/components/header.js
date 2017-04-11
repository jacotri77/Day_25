import React, {Component} from 'react'

const styles ={
  headBlock:{
    height: 50,
    width: '100%',
    background: 'rgb(36,41,46)',
    color: 'rgb(200,201,203)'
  },
  headInput:{
    height:40,
    width:300,
    outline:0,
    border:0,
    fontSize:14,
    paddingLeft:10,
    background: 'rgb(63,67,71)'

  }
}

class Header extends Component{

	


	render() {
    return (
      <div style={styles.headBlock}>
          <img src={require('../images/GitHubSmall.png')} alt="GitHub Logo" />
          <input type="text" placeholder="Search GitHub" style={styles.headInput}/>
          <span className="headerSpan">Pull requests</span>
          <span className="headerSpan">Issues</span>
          <span className="headerSpan">Gist</span>
      </div>

    	)
    }
}
export default Header
