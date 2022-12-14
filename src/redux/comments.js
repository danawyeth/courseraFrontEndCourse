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
            //comment.id = state.comments.length;
            
            return {...state, comments: state.comments.concat(comment)};//only storing it in the memory.
        default:
            return state;
    }
}