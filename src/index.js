import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'	

const API_KEY = 'AIzaSyCrqhSOJNI-36Wot2CT6jBRXtp72rcJtIk'

// Create a new Component. This Component should produce some html

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

//==============================================================================
// This down here is the same as the code right above
//==============================================================================
// const App = function() {
// 	return (
// 		<div> Mortal! You are not prepared. </div>
// 	);
// }

// take this Component's generated html and put it in the DOM
ReactDOM.render(<App></App>, document.querySelector('#container'));
