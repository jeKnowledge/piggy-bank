import Home from '../screens/Home';
import MetaForm from '../screens/MetaForm';
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
		case 'MetaForm':
			return (<MetaForm navigator={ navigator } />);
		default:
			return <Text>UNDEFINED ROUTE</Text>;
	}
}

Router.propTypes = {
	navigator: React.PropTypes.object.isRequired,
	route: React.PropTypes.object.isRequired
};

export default Router;
