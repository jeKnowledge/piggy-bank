import React, { Component } from 'react';
import Card from './Card';
import { View, Text } from 'react-native';
import { TextInput } from '@shoutem/ui';

export default class InputCard extends Component {
  render() {
    return (
      <Card style={{ marginTop: 10 }}>
        <View style={[ styles.nameGoalContainer ]}>
          <View style={ [styles.center, { marginRight: 10 }] }>
            <Text style={styles.rightLabels}>Title</Text>
          </View>
          <TextInput
            maxLength={30}
            placeholder={this.props.placeholder}
            style={{ flex: 3, textAlign: 'center' }}
            onChangeText={this.props.onChangeText}
            value={this.props.value}
          />
        </View>
      </Card>
    );
  }
}

const styles = {
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
