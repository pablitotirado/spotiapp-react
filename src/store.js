import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

//Reducers
import reducerAuth from 'reducers/reducer-auth'
import reducerBrowser from 'reducers/reducer-browser'
import reducerGenres from 'reducers/reducer-genre-seeds'

const reducer = combineReducers({
	reducerAuth,
	reducerBrowser,
	reducerGenres
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
