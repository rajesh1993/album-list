import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
	return (
		// The style atteibute uses the styles variable defined below for styling
		<View style={styles.containerStyle}>
			// This takes the JSX inside wherever this component is used and puts it here
			{props.children}
		</View>
		);
};

const styles = {
	// This can be named anything and is the styling for this component
	containerStyle: {
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10
	}
}

export default Card;