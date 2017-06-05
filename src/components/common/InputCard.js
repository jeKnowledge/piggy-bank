import React, { Component } from 'react';
import { FormLabel, FormInput, Card } from 'react-native-elements';

export default class InputCard extends Component {
  render() {
    return (
      <Card style={{ marginTop: 10 }}>
        <FormLabel labelStyle={{ fontSize: 20, color: '#616161' }}>{this.props.title}</FormLabel>
        <FormInput
          inputStyle={{ fontSize: 15, color: '#616161' }}
          onChangeText={this.props.onChangeText}
          placeholder={this.props.placeholder}
          value={this.props.value}
        />
      </Card>
    );
  }
}
