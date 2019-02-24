import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Quotes from './components/randomQuotesComponent';
import { ConfigureStore } from './redux/configureStore';
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
