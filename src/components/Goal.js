import React from 'react';
import { Text } from 'react-native';
import Card from './Card';

const Goal = (props) => {
	return (
		<Card>
			<Text style={styles.textStyle}>{ props.name }</Text>
		</Card>
	);
};

const styles = {
	textStyle: {
		fontSize: 20,
		paddingLeft: 20,
		fontWeight: 'bold'
	}
};

export default Goal;
