import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import ListItem from './ListItem';

class List extends Component {
	renderData() {
		return this.props.items.map(( item ) => {
      return <ListItem key={Math.random()} name={item.name} onPress={this.props.onItemPress} />
    });
	}

	render() {
		return (
			<ScrollView contentContainerStyle={{ marginTop: 10 }}>
				{ this.renderData() }
			</ScrollView>
		);
	}
}

export default List;
