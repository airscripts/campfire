import posed from 'react-pose';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import { generateRandomQuote } from '../redux/actions';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../App.css';

const mapStateToProps = state => {
  return {
    quotes: state.quotes,
  };
};

const mapDispatchToProps = dispatch => ({
  generateRandomQuote: () => { dispatch(generateRandomQuote()) },
});

const Box = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
});

class Quotes extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  state = { isVisible: false }

  componentDidMount() {
    this.props.generateRandomQuote();
    this.setState({ isVisible: !this.state.isVisible });
  }

  async handleClick() {
    await new Promise((resolve) => {
      setTimeout(() => {
        this.setState({ isVisible: !this.state.isVisible });
        resolve();
      }, 500)
    })

    setTimeout(() => {
      this.props.generateRandomQuote();
      this.setState({ isVisible: !this.state.isVisible });
    }, 500)

  }

  render() {
    let environmentColorsList = [
      "#16a085",
      "#27ae60",
      "#2c3e50",
      "#f39c12",
      "#e74c3c",
      "#9b59b6",
      "#FB6964",
      "#342224",
      "#472E32",
      "#BDBB99",
      "#77B1A9",
      "#73A857"
    ];

    let randomNumber = Math.floor(Math.random() * (environmentColorsList.length - 0) + 0);
    let hrefTweetForTweeter = `https://twitter.com/intent/tweet?text=${this.props.quotes.quote}`;
    const { isVisible } = this.state;

    return (
      <Box
        className="quote"
        pose={isVisible ? 'visible' : 'hidden'}
        style={{ backgroundColor: environmentColorsList[randomNumber] }}
      >
        <div id="quote-box">
          <h4 id="text">{this.props.quotes.quote}</h4>
          <p id="author">{this.props.quotes.author}</p>

          <div className="button-share-new">
            <button
              id="new-quote"
              className="btn btn-dark"
              onClick={this.handleClick}
              style={{ backgroundColor: environmentColorsList[randomNumber] }}
            >
              New Quote
            </button>

            <a id="tweet-quote" href={hrefTweetForTweeter}>
              <button
                className="fa fa-twitter btn btn-dark"
                style={{ backgroundColor: environmentColorsList[randomNumber] }}
              ></button>
            </a>
          </div>
        </div>

        <p style={{ color: "#ffffff", padding: 10 }}>by Anonymous</p>
      </Box>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);