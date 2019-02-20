import { createStore } from 'redux';
import Quotes from './randomQuoteReducer';

export const ConfigureStore = () => {
  const store = createStore(Quotes);
  return store;
}

