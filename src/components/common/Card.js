import React, { Component } from 'react';
import { TouchableWithoutFeedback, Platform, View } from 'react-native';

export default class Card extends Component {
	render() {
    let { onPress, style } = this.props;
		return (
			<TouchableWithoutFeedback style={{ flex: 1 }} onPress={onPress}>
				<View style={ [ generateStyle(), style ] }>
					{ this.props.children }
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

function generateStyle() {
	const { cardStyleAndroid } = styles;
	switch (Platform.OS) {
		case 'android':
			return cardStyleAndroid;
		case 'ios':
			return 0;
	}
}

const styles = {
	cardStyleAndroid: {
		backgroundColor: 'white',
		elevation: 3,
		marginVertical: 7,
		marginHorizontal: 15,
		padding: 15
	}
};
