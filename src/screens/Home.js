import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, GoalList } from '../components';

export default class Home extends Component {
	createGoal() {
		this.props.navigator.push({ id: "GoalForm" })
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<Header text="Piggy Bank" color='#3f51b5' />
				<GoalList />
				<Button
					text="+"
					onPress={ this.createGoal.bind(this) }
					size='50'
					fontSize='25'
					color='#FFD600'
					fontColor='white'
					style= {{
						bottom: 20,
						right: 20
					}}
				/>
			</View>
		);
	}
}
