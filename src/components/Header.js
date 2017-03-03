import React from 'react';
import { View, Text } from 'react-native';

const generateShadow = ( platform ) => {
	switch(platform) {
		case 'android':
			return { elevation: 5 };
		case 'ios':
			return 0;
	}
};

const Header = (props) => {
	const { textStyle, viewStyle } = styles;

	return (
		<View style={ [ viewStyle, { backgroundColor: props.color }, generateShadow(props.platform) ] }>
			<Text style={textStyle}>{ props.text }</Text>
		</View>
	);
};

Header.propTypes = {
	color: React.PropTypes.string.isRequired,
	text: React.PropTypes.string.isRequired,
	platform: React.PropTypes.string.isRequired
};

const styles = {
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 20
	},
	viewStyle: {
		paddingLeft: 20,
		height: 55,
		flexDirection: 'column',
		justifyContent: 'space-around'
	}
};

export default Header;
