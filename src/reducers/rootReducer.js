import {combineReducers} from 'redux'

import movie from '../reducers/movies'
import ratingFilter from '../reducers/ratingFilter'
import titleFilter from '../reducers/titleFilter'



    export default combineReducers({
        movie,
        ratingFilter,
        titleFilter
    
    })
