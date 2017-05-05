import React, { Component } from 'react';
import { View } from 'react-native';
import { RoundButton, GoalForm } from '../components';
import { connect } from 'react-redux';
import { updateGoals } from '../actions/goalsActions';
import { resetForm } from '../actions/formActions';
import { Actions } from 'react-native-router-flux';

class GoalCreate extends Component {
	updateGoals() {
		this.props.updateGoals(this.props.goalForm);
		this.props.resetForm();
		Actions.pop();
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

const mapStateToProps = (state) => {
  let { goalForm } = state;

  return { goalForm };
};

export default connect(mapStateToProps, { updateGoals, resetForm }) (GoalCreate);
