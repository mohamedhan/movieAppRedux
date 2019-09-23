import React, { Component } from 'react'
import CardList from './CardList'
import { movies } from "../constants/data"
import NameFilter from './NameFilter.js'
import RatingFilter from './RatingFilter'
import AddMovie from './AddMovie'
// import IsLoading from'../HOC/IsLoading'
class CardContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies,
      nameFilter: '',
      minRatingFilter: 0
    }
  }


  searchMovies = e => {
    this.setState({ nameFilter: e.target.value });
  };
  onChangeName = (e) => {
    this.setState({
      name: e.target.value
    })
    console.log(this.state.nom)
  }
  onChangeRating = (e) => {
    this.setState({
      star: e.target.value
    })
  }
  onChangeImage = (e) => {
    this.setState({
      img: e.target.value
    })
    console.log(this.state.nom)
  }
 
  
  handleSearch = (input) => {
    this.setState({
      nameFilter: input
    })
  }
  render() {
    const { nameFilter, movies } = this.state;
    return (
      <div className="cardContainer">
        <div className="header">
          <NameFilter
          />
          <AddMovie />
          <RatingFilter
          />
        </div>
        <CardList />

      </div>
    )
  }
}
export default CardContainer;