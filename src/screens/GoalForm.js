import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Card, Button } from '../components';
import { TextInput } from '@shoutem/ui';
import { connect } from 'react-redux';
import { titleChanged, updateGoals } from '../actions';

class GoalForm extends Component {
	onTitleChange(text) {
		this.props.titleChanged(text);
	}

	updateGoals() {
		let goal = { name: this.props.title };
		this.props.updateGoals(goal);
		this.props.titleChanged('');
		this.props.navigator.push({ id: "Home" })
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<Header text="New Goal" color='#3f51b5' />
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
				<Button
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
	return {
		title: state.goalsForm.title
	};
};

export default connect(mapStateToProps, { titleChanged, updateGoals }) (GoalForm);
