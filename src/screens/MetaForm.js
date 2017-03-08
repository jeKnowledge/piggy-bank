import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../components/Header';
import { Card } from 'react-native-elements';
import { TextInput } from '@shoutem/ui';

export default class Home extends Component {
	constructor(props) {
		super(props);
	}

	styles = {
		nameGoalContainer: {
			flexDirection: 'row'
		},
		center: {
			flexDirection: 'column',
			justifyContent: 'center'
		},
		rightLabels: {
			fontWeight: 'bold',
			fontSize: 17
		}
	}

	render() {
		return (
			<View>
				<Header text="Nova Goal" color='#673ab7' />
				<Card>
					<View style={this.styles.nameGoalContainer}>
						<View style={ [this.styles.center, { marginRight: 15 }] }>
							<Text style={this.styles.rightLabels}>Title</Text>
						</View>
						<TextInput
							maxLength={30}
							placeholder="Buy a new graphics card"
							style={{ flex: 3, textAlign: 'center' }}
						/>
					</View>
				</Card>
			</View>
		);
	}
}
