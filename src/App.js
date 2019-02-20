import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="quote-box">
          <h4 id="text"><q>This is a random quote.</q></h4>
          <p id="author">- Rossella Panaro</p>

          <div className="button-share-new">
            <button className="btn btn-dark" id="new-quote">New Quote</button>
            <a id="tweet-quote" href="https://twitter.com/intent/tweet?text=Hello%20world"><button className="fa fa-twitter btn btn-dark"></button></a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
