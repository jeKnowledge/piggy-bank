import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Button extends Component {
	componentWillMount() {
		this.setState({
			buttonStyle: {
				borderRadius: 100,
				justifyContent: 'space-around',
				height: parseInt(this.props.size, 10),
				width: parseInt(this.props.size, 10),
				backgroundColor: this.props.color
			},
			centerHorizontally: {
				flexDirection: 'row',
				justifyContent: 'space-around'
			},
			textStyle: {
				fontWeight: 'bold',
				fontSize: parseInt(this.props.fontSize, 10),
				lineHeight: parseInt(this.props.fontSize, 10)
					+ Math.floor(parseInt(this.props.fontSize, 10) / 10) + 1,
				color: this.props.fontColor
			},
			text: this.props.text
		});
	}

	render() {
		const { buttonStyle, centerHorizontally, textStyle, text } = this.state;

		return (
			<View style={buttonStyle}>
				<View style={centerHorizontally}>
					<Text style={textStyle}>{text}</Text>
				</View>
			</View>
		);
	}
}

export default Button;
