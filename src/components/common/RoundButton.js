import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

class RoundButton extends Component {
	render() {
    const { buttonStyle, textStyle } = this.styles;
		const { text, onPress, style } = this.props;
		return (
        <TouchableWithoutFeedback onPress={onPress}>
          <View style={[ buttonStyle, style ]}>
            <Text style={textStyle}>{text}</Text>
            </View>
        </TouchableWithoutFeedback>
		);
	}

	styles = {
		buttonStyle: {
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

export default RoundButton;
