// Import a library to help create a component
import React from 'react';
// ----Inital import statement----
//import ReactNative from 'react-native';
//---After import destructuring----
import { AppRegistry, View } from 'react-native';

// Importing the app header
import Header from './src/components/Header.js';
// Importing the album list
import AlbumList from './src/components/AlbumList.js';
// Create a component

// const App = () => {
// 	return (
// 		// JSX tags
// 		<Text>Some Text</Text>
// 		);
// };

// The below code can also be written as given above.
// Since there is only one return statement inside, we dont require curlies.
// Also, we can ignore the return as well.
 
const App = () => (
	// View tag wraps the components 
	// so that you can house multiple componenets in one

	//This flex:1 is used to smooth scroll in whatever is being rendered.
	<View style={{ flex: 1 }}>
		<Header headerText={'Albums'} />,
		<AlbumList />
	</View>
 );


// Render it to a device
AppRegistry.registerComponent('albums', () => App);

