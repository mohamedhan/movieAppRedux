import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE, RATING_FILTER, NAME_FILTER } from '../constants/actionTypes'


export function addMovie(payload) {
    return { type: ADD_MOVIE, payload }
}
export function deleteMovie(payload) {
    return { type: DELETE_MOVIE, payload }
}
export function editMovie(payload) {
    return { type: EDIT_MOVIE, payload }
}
export function ratingFilter(payload) {
    return { type: RATING_FILTER, payload }
}
export function nameFilter(payload) {
    return { type: NAME_FILTER, payload }
}


