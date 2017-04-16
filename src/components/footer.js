import React, {Component} from 'react'


class Footer extends Component{

	render() {
    return ( 
      <div>
        <footer id="mainFoot"> 
        <ul>
          <li>&copy; GitHub, inc.</li>
          
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Status</a></li>
            <li><a href="#">Help</a></li>
          </ul>
          <img src={require('../images/GitHub-Mark-32px.png')} alt="GitHub Logo" id="mainGitLogo"/>
          <ul>
            <li><a href="#">Contact GitHub</a></li>
            <li><a href="#">API</a></li>
            <li><a href="#">Training</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </footer>
      </div>
    	)
    }
}
export default Footer