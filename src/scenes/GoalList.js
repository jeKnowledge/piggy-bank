import React, { Component } from 'react';
import { View } from 'react-native';
import { RoundButton, List } from '../components';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class GoalList extends Component {
	createGoal() {
    Actions.goalCreate();
	}

  onItemPress() {
    console.log(this.props.name);
  }

	render() {
		return (
			<View style={{ flex: 1 }}>
				<List items={this.props.goals} onItemPress={this.onItemPress}/>
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
