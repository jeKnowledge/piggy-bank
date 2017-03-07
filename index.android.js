import React, { Component } from 'react';
import { AppRegistry, Navigator } from 'react-native';
import Router from './src/navigation/Router';

export default class App extends Component {
	render() {
		return (
			<Navigator
				initialRoute={{ id: 'home' }}
				renderScene={
					(route, navigator) => {
						return <Router route={route} navigator={navigator} />
					}
				}
			/>
		);
	}
}

AppRegistry.registerComponent('piggyBank', () => App);
