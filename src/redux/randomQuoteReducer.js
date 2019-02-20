import * as ActionTypes from './actionTypes';

export const randomQuotes = (action, state = { errMess: null, quotes: [] }) => {
  switch (action.type) {
    case ActionTypes.GENERATE_RANDOM_QUOTE: 
      return {...state, errMess: null, quotes: action.payload};
    default:
      return state;
  }
};