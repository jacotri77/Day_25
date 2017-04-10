import axios from 'axios'
import store from '../store'

export function getGitHubData() {
	axios.get('https://api.github.com/users/jacotri77').then(user=>{
		store.dispatch({
			type: 'GET_USER',
			user: user.data
		})
	})
}

export function getGitHubRepo() {
	axios.get('https://api.github.com/users/jacotri77/repos').then(repo=>{
		store.dispatch({
			type: 'GET_REPO',
			repo: repo.data
		})
	})
}