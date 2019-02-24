import { createStore, applyMiddleware } from 'redux';
import { randomQuotes } from './randomQuoteReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
  const store = createStore(
    randomQuotes,
    applyMiddleware(thunk, logger)
  );
  
  return store;
}

