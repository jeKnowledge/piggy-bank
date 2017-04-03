import React, { Component } from 'react';
import { AppRegistry, Navigator, View } from 'react-native';
import Router from './src/navigation/Router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';

export default class App extends Component {
	render() {
		return (
			<Provider store={createStore(reducers)}>
				<View style={{ flex:1 }}>
					<Navigator
						initialRoute={{ id: 'Home' }}
						renderScene={
							(route, navigator) => {
								return <Router route={route} navigator={navigator} />
							}
						}
					/>
				</View>
			</Provider>
		);
	}
}

AppRegistry.registerComponent('piggyBank', () => App);
