import React from 'react'
import Rating from './Rating'
import EditMovie from './EditMovie'







const Card = ({ e,del }) => {


  return (
    <div className='movieCard ' >
      <div className='flip-card-inner'>
        <div className='movieCard '>
          <div className="headCard">

            <Rating count={e.star} />
            <i className="fas fa-times" onClick={del}></i>
            <EditMovie oldMovie={e}/>


          </div>

          <div>
            <img className='img' src={e.img} alt=''></img>
          </div>
          <div className='movieDesc'>
            <p className='textName'>{e.name} - {e.year}</p>


          </div>

        </div>
      </div>
    </div>
  )
}










export default Card
