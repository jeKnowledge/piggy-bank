import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, RoundButton, List } from '../components';
import { connect } from 'react-redux';

class Home extends Component {
	createGoal() {
		this.props.navigator.push({ id: "GoalForm" })
	}

  onItemPress() {
    console.log(this.props.name);
  }

	render() {
		return (
			<View style={{ flex: 1 }}>
				<Header text="Piggy Bank" color='#3f51b5' />
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

export default connect(mapStateToProps)(Home);
