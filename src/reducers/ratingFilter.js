// import {RATING_Filter} from '../constants/actionTypes'
// // action example: {type: 'SET_RATING_FILTER', rating: 5}

// const ratingFilter=(state=0,action)=>{
//     if(action.type===RATING_Filter){
//         return action.rating
//     }
//     return state
// }
// export default ratingFilter

const initState={
    filterRate:0
}
const ratingFilter=(state=initState,action)=>{
  switch(action.type){
      default: return state;
  }

}
export default ratingFilter