import * as ActionTypes from './actionTypes';

export const randomQuotes = (state = { errMess: null, quotes: [] }, action) => {
  switch (action.type) {
    case ActionTypes.GENERATE_REQUEST: 
      return state;
    case ActionTypes.GENERATE_SUCCESS:
      let randomNumber = Math.floor(Math.random() * (action.payload.quotes.length - 0) + 0);
      return {...state, errMess: null, quotes: action.payload.quotes[randomNumber]}
    default:
      return state;
  }
};