import React, { Component } from 'react';
import { View } from 'react-native';
import { GoalForm } from '../components';
import { connect } from 'react-redux';
import { updateGoals } from '../actions/goalsActions';
import { resetForm } from '../actions/formActions';
import { Actions } from 'react-native-router-flux';
import { sha256 } from 'hash.js';
import { Button } from 'react-native-elements';
import { buttonColor } from '../Theme';

class GoalEdit extends Component {
  componentWillMount() {
    this.originalGoalCode = sha256().update(this.props.goalForm.title).digest('hex');
  }

	updateGoal() {
    this.props.deleteGoal(this.originalGoalCode);
		this.props.updateGoals(this.props.goalForm);
    this.props.resetForm();
		Actions.pop();
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
        <GoalForm />
				<Button
          backgroundColor={buttonColor}
					title='Save'
					onPress={ this.updateGoal.bind(this) }
          position='bottom'
				/>
			</View>
		);
	}
}

const mapStateToProps = (state) => {
  let { goalForm, goals } = state;

  return { goalForm, goals };
};

export default connect(mapStateToProps, { updateGoals, resetForm }) (GoalEdit);
