import {createStore} from 'redux'
import movieReducer  from '../reducers/movies'



export const store=createStore(movieReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



