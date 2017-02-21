import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';

class Button extends Component {
	styles = {
		buttonStyle: {
			borderRadius: 100,
			justifyContent: 'space-around',
			height: parseInt(this.props.size, 10),
			width: parseInt(this.props.size, 10),
			backgroundColor: this.props.color,
			elevation: 3
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

	render() {
		const { buttonStyle, textStyle } = this.styles;
		const { text } = this.props;

		return (
			<TouchableNativeFeedback onPress={this.props.onPress}>
				<View style={buttonStyle}>
					<Text style={textStyle}>{text}</Text>
				</View>
			</TouchableNativeFeedback>
		);
	}
}

export default Button;
