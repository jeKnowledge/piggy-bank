import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';

class Header extends Component {
	render() {
		const { textStyle, viewStyle } = styles;

		return (
			<View style={ [ viewStyle, { backgroundColor: this.props.color }, generateShadow() ] }>
				<Text style={textStyle}>{ this.props.text }</Text>
			</View>
		);
	}
}

function generateShadow() {
	switch(Platform.OS) {
		case 'android':
			return { elevation: 5 };
		case 'ios':
			return 0;
	}
}

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
