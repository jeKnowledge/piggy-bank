import React, { Component } from 'react';
import Content from './Content';

import {
	AppRegistry,
	StyleSheet,
	Text,
	View
} from 'react-native';

export default class piggyBank extends Component {
	render() {
		return (
			<Navigator
				initialRoute={{ index: 0 }}

				renderScene={(route, navigator) =>
					<View style=styles.head>
						<Text>Piggy Bank</Text>
					</View>
					<Content
						nextScene = {() => {
							navigator.push {
								index: route.index + 1,
							}
						}}

						prevScene = {() => {
							if(route.index != 0) {
								navigator.pop();
							}
						}}

						index = route.index;
					/>
				}
			/>
		);
	}
}

const styles = StyleSheet.create({
	head: {
		height: 5%;
		backgroundColor: #6F297F;
		color: #EC9FFF;
		textWeight: bolder;
	},
});

AppRegistry.registerComponent('piggyBank', () => piggyBank);
