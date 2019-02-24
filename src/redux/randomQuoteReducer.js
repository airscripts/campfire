import * as ActionTypes from './actionTypes';

export const randomQuotes = (state = { errMess: null, quotes: [] }, action) => {
  console.log(action);
  console.log('h');
  switch (action.type) {
    case ActionTypes.GENERATE_RANDOM_QUOTE: 
      return {...state, errMess: null, quotes: action.payload}
    default:
      return state;
  }
};