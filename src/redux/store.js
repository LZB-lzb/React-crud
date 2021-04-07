import { createStore, applyMiddleware } from 'redux'
import allRuducer from './reducers/index'
import thunk from 'redux-thunk'


export default createStore(allRuducer, applyMiddleware(thunk))