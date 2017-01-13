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
    color: #EC9FFF;
    textWeight: bolder;
  },
  viewStyle: {
    backgroundColor: #6F297F;
  },
};

export default Header;
