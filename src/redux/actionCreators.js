import * as ActionTypes from './actionTypes';

export const generateRandomQuoteAfterClick = (quote) => {
  return {
    type: ActionTypes.GENERATE_RANDOM_QUOTE,
    payload: quote
  }
}