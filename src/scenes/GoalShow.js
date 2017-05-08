import React, { Component } from 'react';
import { View } from 'react-native';
import { RoundButton, List, Goal } from '../components';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { sha256 } from 'hash.js';
import { resetForm } from '../actions/formActions';

class GoalList extends Component {
	createGoal() {
    Actions.goalCreate();
	}

  onGoalPress() {
    let goalCode = sha256().update(this.props.title).digest('hex');
    this.props.resetForm(this.props.goals[goalCode]);
    Actions.goalEdit();
  }

  renderData() {
    let out = [];
    if (this.props.goals == null) {
      return out;
    } else {
      for (let key in this.props.goals) {
        out.push(
          <Goal key={key}
            onPress={this.onGoalPress}
            title={this.props.goals[key].title}
            resetForm={this.props.resetForm.bind(this)}
            goals={this.props.goals}
          />
        );
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
					color='#FFD600'
          position='bottom-right'
				/>
			</View>
		);
	}
}

const mapStateToProps = state => {
  let { goals } = state;
  return { goals };
};

export default connect(mapStateToProps, { resetForm })(GoalList);
