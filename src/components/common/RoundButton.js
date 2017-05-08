import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

class RoundButton extends Component {
	render() {
    const { buttonStyle, textStyle } = this.styles;
		const { text, onPress } = this.props;
		return (
        <TouchableWithoutFeedback onPress={onPress}>
          <View style={[ buttonStyle, this.positioning() ]}>
            <Text style={textStyle}>{text}</Text>
          </View>
        </TouchableWithoutFeedback>
		);
	}

  positioning() {
    switch(this.props.position) {
      case 'bottom-right':
        return {
          bottom: 20,
          right: 20
        }
      case 'bottom-left':
        return {
          bottom: 20,
          left: 20
        }
      case 'top-right':
        return {
          top: 20,
          right: 20
        }
      case 'top-left':
        return {
          top: 20,
          left: 20
        }
    }
  }

	styles = {
		buttonStyle: {
			borderRadius: 100,
			justifyContent: 'center',
			height: 50,
			width: 50,
			elevation: 3,
			position: 'absolute',
      backgroundColor: this.props.color
		},
		textStyle: {
			fontWeight: 'bold',
			fontSize: 25,
			color: 'white',
			textAlign: 'center'
		}
	}
}

export default RoundButton;
