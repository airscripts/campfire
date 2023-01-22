import { Provider } from 'react-redux';
import React, { Component } from 'react';

import Quotes from './components/RandomQuote';
import { ConfigureStore } from './redux/store';

import './App.css';

const store = ConfigureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Quotes />
      </Provider>
    );
  }
}

export default App;