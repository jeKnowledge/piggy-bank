import { Home, GoalForm }  from '../screens';
import React from 'react';
import { View, Text } from 'react-native';

const Router = (props) => {
	return (
		<View style={{ flex: 1 }}>
			{ displayRoute(props.route.id, props.navigator) }
		</View>
	);
};

const displayRoute = (route, navigator) => {
	switch(route) {
		case 'Home':
			return (<Home navigator={ navigator } />);
		case 'GoalForm':
			return (<GoalForm navigator={ navigator } />);
		default:
			return <Text>UNDEFINED ROUTE</Text>;
	}
}

export default Router;
