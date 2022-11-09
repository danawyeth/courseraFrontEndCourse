import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";


export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
  
 const newComment = {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment,
  }
  newComment.date = new Date().toISOString();

  return fetch(baseUrl + 'comments', {
    method: "POST",
    body: JSON.stringify(newComment), // So, we'll take this JavaScript object, and then turn that into a JSON, and then put that into the body of the message. So, recall that a post operation requires you to send the data in the body of the message.
    headers: {
      "Content-Type": "application/json" //specify that the body is in json format
    },
    credentials: "same-origin",
  })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error(
          "Error" + response.status + ": " + response.statusText
        );
        error.response = response;
        throw error;
      }
    },
    error => {
    //  var errmess = new Error(error.message);
      throw error; // handles if server doesn't give back anything
    }
  )
  .then((response) => response.json())
  .then(response => dispatch(addComment(response)))
  .catch(error => { console.log('Post Comments ', error.message, alert('Your comment could not be posted\nError: ' + error.message))})
};

//thunk
export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading(true));
  //setTimeout(() => {
  //    dispatch(addDishes(DISHES));
  //}, 2000)

  return fetch(baseUrl + 'dishes') // to fetch the dishes url
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error" + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess; // handles if server doesn't give back anything
      }
    )
    .then((response) => response.json()) //handles promise that is returned
    .then((dishes) => dispatch(addDishes(dishes))) //  takes the json
    .catch((error) => dispatch(dishesFailed(error.message)));
};

export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING,
});

export const dishesFailed = (errmess) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errmess,
});

export const addDishes = (dishes) => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes,
});

export const fetchComments = () => (dispatch) => {
  return fetch(baseUrl + "comments") // to fetch the dishes url
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error" + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess; // handles if server doesn't give back anything
      }
    )
    .then((response) => response.json()) //handles promise that is returned
    .then((comments) => dispatch(addComments(comments))) //  takes the json file and dispatch it in to the
    .catch((error) => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = (errmess) => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errmess,
});

export const addComments = (comments) => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments,
});

export const fetchPromos = () => (dispatch) => {
  dispatch(promosLoading(true));

  return fetch(baseUrl + "promotions") // to fetch the dishes url
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error" + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess; // handles if server doesn't give back anything
      }
    )
    .then((response) => response.json()) //handles promise that is returned
    .then((promos) => dispatch(addPromos(promos))) //  takes the json
    .catch((error) => dispatch(promosFailed(error.message)));
};

export const promosLoading = () => ({
  type: ActionTypes.PROMOS_LOADING,
});

export const promosFailed = (errmess) => ({
  type: ActionTypes.PROMOS_FAILED,
  payload: errmess,
});

export const addPromos = (promos) => ({
  type: ActionTypes.ADD_PROMOS,
  payload: promos,
});
