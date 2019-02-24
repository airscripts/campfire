import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../App.css';
import { connect } from 'react-redux';
import { generateRandomQuote } from '../redux/actionCreators';

const mapStateToProps = state => {
  return {
    quotes: state.quotes
  }
};

const mapDispatchToProps = dispatch => ({
  generateRandomQuote: () => {dispatch(generateRandomQuote())}
});

class Quotes extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  
  componentDidMount() {
    this.props.generateRandomQuote();
  }

  handleClick() {
    this.props.generateRandomQuote();
  }

  render() {
    var environmentColorsList = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
    var randomNumber = Math.floor(Math.random() * (environmentColorsList.length - 0) + 0);
    var hrefTweetForTweeter = `https://twitter.com/intent/tweet?text=${this.props.quotes.quote}`;

    return (
      <div className="quote" style={{backgroundColor: environmentColorsList[randomNumber]}}>
        <div id="quote-box">
          <h4 id="text">{this.props.quotes.quote}</h4>
          <p id="author">{this.props.quotes.author}</p>

          <div className="button-share-new">
            <button 
              className="btn btn-dark" 
              id="new-quote" 
              onClick={this.handleClick} 
              style={{backgroundColor: environmentColorsList[randomNumber]}}>
              New Quote
            </button>
            
            <a id="tweet-quote" href={hrefTweetForTweeter}>
              <button className="fa fa-twitter btn btn-dark" style={{backgroundColor: environmentColorsList[randomNumber]}}></button>
            </a>
          </div>
        </div>
        <p style={{color: "#ffffff", padding: 10}}>by Airscript</p>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
