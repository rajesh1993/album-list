import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ albumData }) => {
	//The props object has been destructured to take in only albumData above
	//The albumData is further destructured to take in only the reqd parameters
	const { title, artist, thumbnail_image, image, url } = albumData;
	const { headerContentStyle, 
			thumbnailStyle, 
			thumbnailContainerStyle,
			headerTextStyle,
			albumArtStyle } = styles;
	return (
		// <View>
		// 	<Text>This is album: { props.albumData.title }</Text>
		// </View>
		<Card>
			<CardSection>
				<View style={thumbnailContainerStyle}>
					//Requires a url to display image
					<Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
				</View>
				<View style={headerContentStyle}>
					<Text style={headerTextStyle}>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>

			<CardSection> 
				<Image style={albumArtStyle} source={{ uri: image }} />
			</CardSection>

			<CardSection>
				<Button pressFunction={() => Linking.openURL(url)}>
					<Text>Buy Now</Text>
				</Button>
			</CardSection>
		</Card>
	);
};

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerTextStyle: {
		fontSize: 18
	},
	thumbnailStyle: {
		height: 50,
		width: 50
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	albumArtStyle: {
		height: 300,
		flex: 1,
		width: null
	}
};

export default AlbumDetail;
