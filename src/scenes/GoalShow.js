import React, { Component } from 'react';
import { View } from 'react-native';
import { RoundButton, List, Goal } from '../components';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class GoalList extends Component {
	createGoal() {
    Actions.goalCreate();
	}

  onGoalPress() {
    console.log(this.props.value);
  }

  renderData() {
    let counter = -1;
    return this.props.goals.map(goal => {
      ++counter;
      return <Goal key={counter} onPress={this.onGoalPress} value={goal.name} />
    });
  }

	render() {
		return (
			<View style={{ flex: 1 }}>
				<List data={this.renderData()}/>
				<RoundButton
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

const mapStateToProps = state => {
  let { goals } = state;
  return { goals };
};

export default connect(mapStateToProps)(GoalList);
