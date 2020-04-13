import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import thunkMiddleware from 'redux-thunk'
import characterFormReducer from './redusers/characterForm'
import characterListReducer from './redusers/characterList'

let rootReducer = combineReducers({
    characterForm: characterFormReducer,
    characterList: characterListReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer,  composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store