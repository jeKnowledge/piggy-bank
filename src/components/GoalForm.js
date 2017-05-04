import React, { Component } from 'react';
import { View } from 'react-native';
import { List, InputCard } from './common';
import { connect } from 'react-redux';
import { titleChanged } from '../actions/formActions';

class GoalForm extends Component {
  onTitleChangeText(text) {
    this.props.titleChanged(text);
  }

  renderData() {
    return [
      <InputCard onChangeText={this.onTitleChangeText.bind(this)} placeholder='Buy a new graphics card'/>
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
  let { goals } = state;

  return { goals };
};

export default connect(mapStateToProps, { titleChanged })(GoalForm);
