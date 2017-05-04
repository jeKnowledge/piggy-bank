import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, RoundButton } from '../components';
import { TextInput } from '@shoutem/ui';
import { connect } from 'react-redux';
import { titleChanged, updateGoals } from '../actions';
import { Actions } from 'react-native-router-flux';

// TODO: Create action to to change form state that recieves object

class GoalCreate extends Component {
	onTitleChange(text) {
		this.props.titleChanged(text);
	}

	updateGoals() {
		let goal = { name: this.props.title };
		this.props.updateGoals(goal);
		this.props.titleChanged('');
		Actions.goalList();
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<Card style={{ marginTop: 10 }}>
					<View style={[ this.styles.nameGoalContainer ]}>
						<View style={ [this.styles.center, { marginRight: 10 }] }>
							<Text style={this.styles.rightLabels}>Title</Text>
						</View>
						<TextInput
							maxLength={30}
							placeholder="Buy a new graphics card"
							style={{ flex: 3, textAlign: 'center' }}
							onChangeText={this.onTitleChange.bind(this)}
							value={this.props.title}
						/>
					</View>
				</Card>
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

	styles = {
		nameGoalContainer: {
			flexDirection: 'row'
		},
		center: {
			flexDirection: 'column',
			justifyContent: 'center'
		},
		rightLabels: {
			fontWeight: 'bold',
			fontSize: 17
		}
	}
}

const mapStateToProps = state => {
  let { title } = state.goalsForm;

	return { title };
};

export default connect(mapStateToProps, { titleChanged, updateGoals }) (GoalCreate);
