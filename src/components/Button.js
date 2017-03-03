import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';

class Button extends Component {
	generateComponent() {
		const { buttonStyleAndroid, textStyle } = this.styles;
		const { text, onPress, style } = this.props;

		switch (this.props.platform) {
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

Button.propTypes = {
	text: React.PropTypes.string.isRequired,
	platform: React.PropTypes.string.isRequired,
	size: React.PropTypes.string.isRequired,
	color: React.PropTypes.string.isRequired,
	fontColor: React.PropTypes.string.isRequired,
	fontSize: React.PropTypes.string.isRequired,
	onPress: React.PropTypes.func.isRequired,
	style: React.PropTypes.object.isRequired
};

export default Button;
