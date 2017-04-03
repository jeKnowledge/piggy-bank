import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Goal from './Goal';
import { connect } from 'react-redux';

class GoalList extends Component {
	renderData = () => {
		return this.props.goals.map(goal => <Goal key={Math.random()} name={goal.name} />);
	}

	render() {
		return (
			<ScrollView>
				{ this.renderData() }
			</ScrollView>
		);
	}
}

const mapStateToProps = state => {
	return {
		goals: state.goals
	}
};

export default connect(mapStateToProps)(GoalList);
