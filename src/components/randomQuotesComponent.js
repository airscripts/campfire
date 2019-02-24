import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../App.css';
import { connect } from 'react-redux';
import { generateRandomQuoteAfterClick } from '../redux/actionCreators';

const mapStateToProps = state => {
  return {
    quotes: state.quotes
  }
};

const mapDispatchToProps = dispatch => ({
  generateRandomQuoteAfterClick: (author, text) => { dispatch(generateRandomQuoteAfterClick(author, text))}
});

class Quotes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author: 'Pippo',
      text: 'Hello, my friend nigga nigga'
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.generateRandomQuoteAfterClick(this.state.author, this.state.text)
  }

  render() {
    return (
      <div className="quote">
        <div id="quote-box">
          <h4 id="text"><q>{this.state.text}</q></h4>
          <p id="author">{this.state.author}</p>

          <div className="button-share-new">
            <button className="btn btn-dark" id="new-quote" onClick={this.handleClick}>New Quote</button>
            <a id="tweet-quote" href="https://twitter.com/intent/tweet?text=Not_Working"><button className="fa fa-twitter btn btn-dark"></button></a>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
