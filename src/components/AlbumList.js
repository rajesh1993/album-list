import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// This is a class-based component. We create a class for the component
// that inherits from the React Component class.
class AlbumList extends Component {
	
	// Default state where the albums are empty
	state = { albums: [] };

	// This is a lifecycle method and will automatically be executed
	// as soon as the component is rendered to the screen
	componentWillMount() {
		console.log('componentWillMount has executed');
		//Use the below command as a break point in the debug UI to examine the objects
		//debugger;

		// axios used for http request
		//setState is used to change the state
		axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({ albums: response.data }));
	}

	// Note: we use { variable } -> this representation inside JSX
	// Note2: Also map is used here to process each element in the array 
	// Note3: THe key attribute is to ensure each element has a unique identifier associated 
	renderAlbums() {
		// This was used to show the album title as a list
		// return this.state.albums.map(album => 
		// 	<Text key={album.title}>{ album.title }</Text>);

		// This is used to render the child component for each album title
		return this.state.albums.map(album => 
			<AlbumDetail key={album.title} albumData={album} />);
	}

	// This method renders the component. So return the required view.
	render() {
		console.log(this.state);
		return (
			// By default a component is nopt scrollable so instead of View we use ScrollView
			<ScrollView>
				{ this.renderAlbums() }
			</ScrollView>
		);
	}
}
export default AlbumList;
