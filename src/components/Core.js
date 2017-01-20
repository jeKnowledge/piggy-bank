import React from 'react';
import {
	View
} from 'react-native';
import Header from './Header';

const Core = (props) => {
	return (
		<View style={{ backgroundColor: '#D9D9D9', height: 1000 }} >
			<Header name="Piggy Bank" />
			<View>{props.data}</View>
		</View>
	);
};


export default Core;
