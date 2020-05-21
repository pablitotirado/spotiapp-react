import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

//Reducers
import reducerAuth from 'reducers/reducer-auth'

const reducer = combineReducers({
	reducerAuth
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
