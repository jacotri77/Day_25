import React, {Component} from 'react'


class Footer extends Component{

	render() {
    return ( 
      <div>
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
export default Footer