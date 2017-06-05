import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { deleteGoal } from '../actions/goalsActions';
import { resetForm } from '../actions/formActions';
import { Actions } from 'react-native-router-flux';
import { sha256 } from 'hash.js';
import { Tabs, Tab, Icon } from 'react-native-elements';
import { GoalEdit } from 'GoalEdit';

class GoalDetails extends Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 'details',
    }
  }

  componentWillMount() {
    this.originalGoalCode = sha256().update(this.props.goalForm.title).digest('hex');
  }

  deleteGoal() {
    this.props.deleteGoal(this.originalGoalCode);
    this.props.resetForm();
		Actions.pop();
  }


  changeTab(selectedTab) {
    this.setState({selectedTab})
  }

	render() {
    const { selectedTab } = this.state;
		return (
			<View style={{ flex: 1 }}>
        <Tabs>
          <Tab
            selected={selectedTab === 'edit'}
            renderIcon={() => <Icon name="floppy-o" type="font-awesome"/>}
            onPress={this.changeTab('edit').bind(this)} >
            <GoalEdit/>
          </Tab>
          <Tab
            renderIcon={() => <Icon name="trash-o" type="font-awesome"/>}
            onPress={this.deleteGoal.bind(this)} >
          </Tab>
        </Tabs>
			</View>
		);
	}
}

const mapStateToProps = (state) => {
  let { goalForm, goals } = state;

  return { goalForm, goals };
};

export default connect(mapStateToProps, { resetForm, deleteGoal }) (GoalDetails);
