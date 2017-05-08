import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, GoalForm } from '../components';
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
				<Button
					text='Create'
					onPress={ this.updateGoals.bind(this) }
          position='bottom'
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
