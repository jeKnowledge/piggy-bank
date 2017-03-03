import React from 'react';
import { Text } from 'react-native';
import { Card } from 'react-native-elements'

const Meta = (props) => {
	return (
		<Card containerStyle={styles.viewStyle}>
			<Text style={styles.textStyle}>{ props.name }</Text>
		</Card>
	);
};

Meta.propTypes = {
	name: React.PropTypes.string.isRequired
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
		borderRadius: 2,
		flexDirection: 'column',
		justifyContent: 'center'
	}
};

export default Meta;
