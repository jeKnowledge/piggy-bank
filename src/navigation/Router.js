import Home from '../screens/Home';
import React from 'react';
import { View, Text } from 'react-native';
import Header from '../components/Header';

const Router = (props) => {
	return (
		<View style={{ flex: 1 }}>
			<Header text="Piggy Bank" color='#673ab7' />
			{ displayRoute(props.route.id) }
		</View>
	);
};

const displayRoute = (route) => {
	switch(route) {
		case 'home':
			return (<Home />);
		default:
			return <Text>UNDEFINED ROUTE</Text>;
	}
}

Router.propTypes = {
	navigator: React.PropTypes.object.isRequired,
	route: React.PropTypes.object.isRequired
};

export default Router;
