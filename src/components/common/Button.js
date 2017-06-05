import React, { Component } from 'react';
import { TouchableWithoutFeedback, Platform, View, Text } from 'react-native';
import { mainColor } from '../../Theme.js';

export default class Button extends Component {
	render() {
    let { onPress } = this.props;
		return (
			<TouchableWithoutFeedback style={{ flex: 1 }} onPress={onPress}>
				<View style={ this.generateStyle() }>
					<Text style={ this.styles.textStyle }>{ this.props.text }</Text>
				</View>
			</TouchableWithoutFeedback>
		);
	}

  generateStyle() {
    const { cardStyleAndroid, cardStyle } = this.styles;
    switch (Platform.OS) {
      case 'android':
        return [ cardStyleAndroid, cardStyle, this.positioning()];
      case 'ios':
        return [ cardStyle, this.positioning() ];
    }
  }

  positioning() {
    switch (this.props.position) {
      case 'top':
        return { top: 0 }
      case 'bottom':
        return { bottom: 0 }
    }
  }

  styles = {
    cardStyle: {
      marginBottom: 15,
      marginHorizontal: 15,
      padding: 10,
      borderRadius: 5,
      justifyContent: 'center',
      borderColor: mainColor,
      borderWidth: 2
    },
    textStyle: {
      color: mainColor,
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 18
    }
  };
}
