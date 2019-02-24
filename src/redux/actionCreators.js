import * as ActionTypes from './actionTypes';

export const generateRandomQuoteAfterClick = (author, text) => ({
    type: ActionTypes.GENERATE_RANDOM_QUOTE,
    payload: {
        author: author,
        text: text
    }
});