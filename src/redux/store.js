import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

import { randomQuotes } from './reducer';

export const ConfigureStore = () => {
  const store = createStore(
    randomQuotes,
    applyMiddleware(thunk, logger)
  );
  
  return store;
}

