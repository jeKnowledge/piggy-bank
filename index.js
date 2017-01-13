import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

const App = () => {
  return (
    <Header name="Piggy Bank" />
  );
};

AppRegistry.registerComponent('piggyBank', () => App);
