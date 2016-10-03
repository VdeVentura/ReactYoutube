import React, { Component } from 'react';

//==============================================================================
// The code below is a "class component"
//==============================================================================
// Listening to the changes of the input and printing them in the log

class SearchBar extends Component {

	constructor(props) {
		super(props);

		this.state = {
			term : ''
		}
	}

	render() {
		return (
			<div>
				<input
					value={this.state.term}
					onChange={(e) => this.setState({ term: e.target.value})}
				/>
				<br />
				Value of the input: {this.state.term}
			</div>
		);
	}
}


//==============================================================================
// The code below is a "functional component"
//==============================================================================
// const SearchBar = () => {
// 	return <input />
// };

export default SearchBar;
