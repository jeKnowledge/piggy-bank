import React, { Component } from 'react';
import { ScrollView } from 'react-native';

class List extends Component {
	render() {
		return (
			<ScrollView contentContainerStyle={{ marginTop: 10 }}>
				{ this.props.data }
			</ScrollView>
		);
	}
}

export default List;
