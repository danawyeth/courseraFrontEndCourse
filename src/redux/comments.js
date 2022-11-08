import * as ActionTypes from './ActionTypes';


export const Comments = (state = {
    errMess: null,
    comments: []
}, action) => {
    console.log("Reducer has been initialized");
    switch(action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, isLoading: false, errMess: null, comments: action.payload};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, comments: []} 

        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.comments.length; //to look at the length of the array, if it contains a certain number of comments. teh length of the array tells me how many comments they are. then we are assigning the comment id in sequential order
            comment.date = new Date().toISOString(); 
            return {...state, comments: state.comments.concat(comment)};//only storing it in the memory.
        default:
            return state;
    }
}