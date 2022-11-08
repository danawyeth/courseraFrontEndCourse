import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';
import { baseUrl } from '../shared/baseUrl';
import { comment } from 'postcss';

export const addComment = (dishId, rating, author, comment) => ({
     type: ActionTypes.ADD_COMMENT,
     payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
     }
})
//thunk
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    //setTimeout(() => {
    //    dispatch(addDishes(DISHES));
    //}, 2000)

    return fetch(baseUrl + 'dishes') // to fetch the dishes url
        .then(response => response.json()) //handles promise that is returned
        .then(dishes => dispatch(addDishes(dishes))); //  takes the json
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
}); 

export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments') // to fetch the dishes url
        .then(response => response.json()) //handles promise that is returned
        .then(comments => dispatch(addDishes(comments))); //  takes the json file and dispatch it in to the 
}

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
}); 

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));

    return fetch(baseUrl + 'promotions') // to fetch the dishes url
        .then(response => response.json()) //handles promise that is returned
        .then(promos => dispatch(addPromos(promos))); //  takes the json
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
}); 