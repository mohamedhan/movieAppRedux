import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE } from '../constants/actionTypes'
import { movies } from '../constants/data'

const initState = {
    movies


}



const movieReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_MOVIE:
            // return {...state,movies:[...state.movies,action.payload]}
            return { ...state, movies: state.movies.concat(action.payload) }

        case DELETE_MOVIE:
            return { ...state, movies: state.movies.filter(e => e.id !== action.payload) }

        case EDIT_MOVIE:

            return {...state,movies:state.movies.map(e=>e.id===action.payload.id ? {...action.payload.newMovie}:e)}

           

        default:
            return state


    }
}
export default movieReducer