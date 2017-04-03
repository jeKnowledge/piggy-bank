import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback, Platform } from 'react-native';

class Button extends Component {
	generateComponent() {
		const { buttonStyleAndroid, textStyle } = this.styles;
		const { text, onPress, style } = this.props;

		switch (Platform.OS) {
			case 'android':
				return (
					<TouchableNativeFeedback onPress={onPress}>
						<View style={[ buttonStyleAndroid, style ]}>
							<Text style={textStyle}>{text}</Text>
						</View>
					</TouchableNativeFeedback>
				);
			case 'ios':
				return 0;
		}
	}

	render() {
		return (
			<View>
				{ this.generateComponent() }
			</View>
		);
	}

	styles = {
		buttonStyleAndroid: {
			borderRadius: 100,
			justifyContent: 'center',
			height: parseInt(this.props.size, 10),
			width: parseInt(this.props.size, 10),
			backgroundColor: this.props.color,
			elevation: 3,
			position: 'absolute'
		},
		textStyle: {
			fontWeight: 'bold',
			fontSize: parseInt(this.props.fontSize, 10),
			lineHeight: parseInt(this.props.fontSize, 10)
				+ Math.floor(parseInt(this.props.fontSize, 10) / 10) + 1,
			color: this.props.fontColor,
			textAlign: 'center'
		}
	}
}

export default Button;
