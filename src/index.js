import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyCrqhSOJNI-36Wot2CT6jBRXtp72rcJtIk';

// Create a new Component. This Component should produce some html

class App extends Component {
	constructor (props) {
		super();

		this.state = {
			videos: [],
			selectedVideo: null
		};

		YTSearch({ key: API_KEY, term: 'dota' }, (videos) => {

			// this really means "this.setState({videos : videos});"
			// when the property and the parameter has the same name this can be
			// wrote as bellow
			this.setState({
				videos : videos,
				selectedVideo : videos[0]
			});

		});
	}
	render() {
		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList
					onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
					videos={this.state.videos}/>
			</div>
		);
	}
}

// take this Component's generated html and put it in the DOM
ReactDOM.render(<App></App>, document.querySelector('#container'));
