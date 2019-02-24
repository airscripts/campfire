import * as ActionTypes from './actionTypes';

const api = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

export const generateRequest = () => ({
    type: ActionTypes.GENERATE_REQUEST
});

export const generateSuccess = (payload) => ({
    type: ActionTypes.GENERATE_SUCCESS,
    payload
});

export const generateError = () => ({
    type: ActionTypes.GENERATE_ERROR
});

export function generateRandomQuote() {
	return (dispatch) => {
  	dispatch(generateRequest());
    return generateRandomQuoteAfterClick().then((response) =>{
    	if(response.status === 200){
        return response.json()
        .then((data) => {
          dispatch(generateSuccess(data));
        })
      }
      else{
      	dispatch(generateError())
      }
    })
  }
}

export function generateRandomQuoteAfterClick() {
  return fetch(api)
     .then(response => response)
}