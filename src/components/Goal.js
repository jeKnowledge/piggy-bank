import React from 'react';
import { Text,View } from 'react-native';

const Goal = (props) => {
	return (
		<View style={styles.viewStyle}>
			<Text style={styles.textStyle}>{ props.name }</Text>
		</View>
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
