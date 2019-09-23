import React from 'react'
import Rating from './Rating'
import {connect} from 'react-redux'
const RatingFilter = ({onChange=()=>{}, count=0}) => (
    <div className="rating-filter">
        <span className="rating-filter-text">Search by Rating</span>
        <Rating
            count={count}
            onChangeRating={(newRating) =>{
                onChange(newRating)
            }} />
      </div>
)


const mapStateToProps=state=>{
    return{
        count:state.minRatingFilter
    }
}
const mapDispatchToProps= dispatch=>{
    return {
        onChange:(newRating)=>{
            dispatch({
                type:'RATING_Filter',
                // newRating prend la valeur d'étoile 
                rating:newRating
            })
        }
    }
}
const RatingFilterContainer=
connect(mapStateToProps,mapDispatchToProps)(RatingFilter)

export default RatingFilterContainer 