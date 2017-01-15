import React from 'react';
import { View, Text } from 'react-native';

const Meta = (props) => {
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
	},
	viewStyle: {
		backgroundColor: 'white',
		marginLeft: 10,
		marginRight: 10,
		marginTop: 10,
		height: 50,
		borderRadius: 5,
		flexDirection: 'column',
		justifyContent: 'space-around'
	}
};

export default Meta;
