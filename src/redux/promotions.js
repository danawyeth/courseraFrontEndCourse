import * as ActionTypes from './ActionTypes';

export const Promotions = (state = {
    promotions: [],
    isLoading: true,
    errMess: null
}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_PROMOS:
            return {...state, isLoading: false, errMess: null, promotions: action.payload} 

        case ActionTypes.PROMOS_LOADING:
            return {...state, isLoading: true, errMess: null, promotions: []} //returned the state.

        case ActionTypes.PROMOS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, promotions: []} 

        default:
            return state;
    }
}