import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/Header';
import Metas from './src/components/Metas'

const App = () => {
	const metas = ["Meta 1", "Meta 2", "Meta 3"];

	return (
		<Header name="Piggy Bank" />
		<Metas data={metas} />
	);
};

AppRegistry.registerComponent('piggyBank', () => App);
