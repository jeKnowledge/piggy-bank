import React, { Component } from 'react';
import { View, Platform } from 'react-native';

class Card extends Component {
	generateComponent() {
		const { cardStyleAndroid } = this.styles;
		switch (Platform.OS) {
			case 'android':
				return (
					<View style={ [ cardStyleAndroid, this.props.style ] }>
						{ this.props.children }
					</View>
				);
			case 'ios':
				return 0;
		}
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				{ this.generateComponent() }
			</View>
		);
	}

	styles = {
		cardStyleAndroid: {
			backgroundColor: 'white',
			elevation: 3,
			marginVertical: 7,
			marginHorizontal: 15,
			padding: 15
		}
	}
}

export default Card;
