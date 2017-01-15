import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header.js';
import Metas from './src/components/Metas';

const App = () => {
	const metas = ['Meta 1', 'Meta 2', 'Meta 3'];

	return (
			<View style={{ backgroundColor: '#D9D9D9', height: 1000 }} >
			<Header name="Piggy Bank" />
			<Metas data={metas} />
		</View>
	);
};

AppRegistry.registerComponent('piggyBank', () => App);
