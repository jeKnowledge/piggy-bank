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
    let out = [];
    if (this.props.goals == null) {
      return out;
    } else {
      for (let key in this.props.goals) {
        out.push(<Goal key={key} onPress={this.onGoalPress} value={this.props.goals[key].title} />)
      }
      return out;
    }
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
