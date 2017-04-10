import {combineReducers, createStore} from 'redux'
import gitHubReducer from './reducers/gitHubReducer'


const rootReducer = combineReducers({
  gitHubReducer,
})

const store = createStore(rootReducer)

export default store