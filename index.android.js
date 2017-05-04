import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import SceneRouter from './src/SceneRouter';

export default class App extends Component {
	render() {
		return (
			<Provider store={createStore(reducers)}>
				<View style={{ flex:1 }}>
					<SceneRouter />
				</View>
			</Provider>
		);
	}
}

AppRegistry.registerComponent('piggyBank', () => App);
