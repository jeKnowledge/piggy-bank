import React, { Component } from 'react';
import { Text } from 'react-native';
import Card from './common/Card';

export default class Goal extends Component {
  render() {
    return (
      <Card onPress={this.props.onPress.bind(this)}>
        <Text style={styles.textStyle}>{ this.props.value }</Text>
      </Card>
    );
  }
}

const styles = {
	textStyle: {
		fontSize: 20,
		paddingLeft: 20,
		fontWeight: 'bold'
	}
};
