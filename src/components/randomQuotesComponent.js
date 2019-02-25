import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../App.css';
import { connect } from 'react-redux';
import { generateRandomQuote } from '../redux/actionCreators';
import posed from 'react-pose';

const mapStateToProps = state => {
  return {
    quotes: state.quotes
  }
};

const mapDispatchToProps = dispatch => ({
  generateRandomQuote: () => {dispatch(generateRandomQuote())}
});

const Box = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
});

class Quotes extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  state = { isVisible: false }
  
  componentDidMount() {
    this.props.generateRandomQuote();
    this.setState({ isVisible: !this.state.isVisible});
  }

  async handleClick() {
    await new Promise((resolve) => {
      setTimeout(() => {
        this.setState({ isVisible: !this.state.isVisible});
        resolve();
      }, 500)
    })
    
    setTimeout(() => {
      this.props.generateRandomQuote();
      this.setState({ isVisible: !this.state.isVisible});
    }, 500)

  }

  render() {
    var environmentColorsList = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
    var randomNumber = Math.floor(Math.random() * (environmentColorsList.length - 0) + 0);
    var hrefTweetForTweeter = `https://twitter.com/intent/tweet?text=${this.props.quotes.quote}`;
    const { isVisible } = this.state;

    return (
      <Box className="quote" style={{backgroundColor: environmentColorsList[randomNumber]}} pose={isVisible ? 'visible' : 'hidden'}>
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
      </Box>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
