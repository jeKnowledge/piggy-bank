import Home from '../screens/Home';
import React from 'react';
import { View } from 'react-native';
import Header from '../components/Header';

const Router = (props) => {
	return (
		<View style={{ flex: 1 }}>
			<Header platform={ props.platform } text="Piggy Bank" color='#673ab7' />
			<Home platform={props.platform }/>
		</View>
	);
};

Router.propTypes = {
	platform: React.PropTypes.string.isRequired,
	navigator: React.PropTypes.object.isRequired
};

export default Router;
