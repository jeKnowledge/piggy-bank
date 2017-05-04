import React, { Component } from 'react';
import { View } from 'react-native';
import { RoundButton, GoalForm } from '../components';
import { connect } from 'react-redux';
import { updateGoals } from '../actions/goalsActions';
import { resetForm } from '../actions/formActions';
import { Actions } from 'react-native-router-flux';

class GoalCreate extends Component {
	updateGoals() {
		let goal = { name: this.props.title };
		this.props.updateGoals(goal);
		this.props.resetForm();
		Actions.goalShow();
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
        <GoalForm />
				<RoundButton
					text="+"
					onPress={ this.updateGoals.bind(this) }
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

export default connect(null, { updateGoals, resetForm }) (GoalCreate);
