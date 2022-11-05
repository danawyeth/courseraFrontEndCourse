import * as ActionTypes from './ActionTypes';

export const addComment = (dishid, rating, author, comment) => ({
     type: ActionTypes.ADD_COMMENT,
     payload: {
         dishid: dishid,
         rating: rating, 
         author: author,
         comment: comment
     }
})
