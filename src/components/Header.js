import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
	const { textStyle, viewStyle } = styles;

	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{ props.name }</Text>
		</View>
	);
};

const styles = {
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 20
	},
	viewStyle: {
		paddingLeft: 20,
		backgroundColor: '#673AB7',
		height: 60,
		flexDirection: 'column',
		justifyContent: 'space-around',
		elevation: 5
	},
};

export default Header;
