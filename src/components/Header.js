import React from 'react';
import {
  View,
  Text,
} from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{ props.name }</Text>
    </View>
  );
};

const styles = {
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 20
	},
	viewStyle: {
		paddingLeft: 20,
		backgroundColor: '#4B077D',
		height: 60,
		flexDirection: 'column',
		justifyContent: 'space-around',
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 5 },
		shadowOpacity: 0.5
	},
};

export default Header;
