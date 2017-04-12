const initialState = {
	user:{},
	repo:[]
}

export default function(state=initialState, action) {
	switch (action.type) {
		case 'GET_DATA': 
			return {...state, user: action.user }
		case 'GET_REPO': 
			return {...state, repo: action.repo }	
		default:
			return state
	}
}
