import React from 'react';
import Card from "./Card";
import { connect } from 'react-redux'
import { deleteMovie } from '../actions/actions'
const CardList = (props) => {
    return (
        // .filter(el => el.rating >= this.state.minRatingFilter &&
        //     el.title.toLowerCase().includes(searchName.toLowerCase()))
        <div className="movieApp">
            {props.movies.map(elm => (

                <Card e={elm} del={() => props.delete(elm.id)} />
            ))}
        </div>
    )
}



export default connect(state => ({
    movies: state.movies
}), dispatch => ({
    delete: x => dispatch(deleteMovie(x))
}))(CardList);