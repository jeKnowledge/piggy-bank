import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../components/Header';
import { Card } from 'react-native-elements';
import { TextInput } from '@shoutem/ui';
import { connect } from 'react-redux';
import { titleChanged } from '../actions';

class GoalForm extends Component {
	constructor(props) {
		super(props);
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

	onTitleChange(text) {
		this.props.titleChanged(text);
	}

	render() {
		return (
			<View>
				<Header text="New Goal" color='#673ab7' />
				<Card>
					<View style={this.styles.nameGoalContainer}>
						<View style={ [this.styles.center, { marginRight: 15 }] }>
							<Text style={this.styles.rightLabels}>Title</Text>
						</View>
						<TextInput
							maxLength={30}
							placeholder="Buy a new graphics card"
							style={{ flex: 3, textAlign: 'center' }}
							onChangeText={this.onTitleChange.bind(this)}
							value={this.props.goals}
						/>
					</View>
				</Card>
			</View>
		);
	}
}

const mapStateToProps = state => {
	return {
		title: state.goalsForm.title
	};
};

export default connect(mapStateToProps, { titleChanged }) (GoalForm);
