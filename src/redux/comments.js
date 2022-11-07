import {COMMENTS} from '../shared/comments';
import * as ActionTypes from './ActionTypes';


export const Comments = (state = COMMENTS, action) => {
    console.log("Reducer has been initialized");
    switch(action.type) {
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length; //to look at the length of the array, if it contains a certain number of comments. teh length of the array tells me how many comments they are. then we are assigning the comment id in sequential order
            comment.date = new Date().toISOString(); 
            return state.concat(comment);//only storing it in the memory.
        default:
            return state;
    }
}