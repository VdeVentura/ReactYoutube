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
			<div className="search-bar">
				<input
					value={this.state.term}
					onChange={(e) => this.onInputChange(e.target.value)}
				/>
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}


//==============================================================================
// The code below is a "functional component"
//==============================================================================
// const SearchBar = () => {
// 	return <input />
// };

export default SearchBar;
