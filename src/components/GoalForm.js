import React, { Component } from 'react';
import { View } from 'react-native';
import InputCard from './common/InputCard';
import List from './common/List';
import { connect } from 'react-redux';
import { titleChanged } from '../actions/formActions';

class GoalForm extends Component {
  onTitleChangeText(text) {
    this.props.titleChanged(text);
  }

  renderData() {
    return [
      <InputCard key='title'
        onChangeText={this.onTitleChangeText.bind(this)}
        placeholder='Buy a new graphics card'
        value={this.props.goalForm.title}
      />
    ];
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <List data={this.renderData()} />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  let { goals, goalForm } = state;

  return { goals, goalForm };
};

export default connect(mapStateToProps, { titleChanged })(GoalForm);
