import { Router, Scene } from 'react-native-router-flux';
import React, { Component } from 'react';
import { GoalShow, GoalCreate } from './scenes';
import { Platform } from 'react-native';
import { headerColor } from './Theme';

export default class SceneRouter extends Component {
  render() {
    return (
      <Router>
        <Scene key='goalShow' component={GoalShow} title='Piggy Bank' { ...componentStyle } />
        <Scene key='goalCreate' component={GoalCreate} title='New Goal' { ...componentStyle } />
      </Router>
    );
  }
}

const styles = {
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
    fontSize: 20
	},
	headerStyle: {
    backgroundColor: headerColor,
    height: 60
	},
  sceneStyle: {
    paddingTop: 50
  }
};

const componentStyle = {
  navigationBarStyle: [ styles.headerStyle, generateShadow() ],
  titleStyle: styles.textStyle,
  sceneStyle: styles.sceneStyle
}

function generateShadow() {
	switch(Platform.OS) {
		case 'android':
			return { elevation: 5 };
		case 'ios':
			return 0;
	}
}
