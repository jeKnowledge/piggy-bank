import React from 'react';
import View from 'react-native';

const Card = (props) => {
	<View style={props.containerStyle}>
		{ props.children }
	</View>
};

export default Card;
