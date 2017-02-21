import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './Header';
import Footer from './Footer';

class Core extends Component {
	constructor(props) {
		super(props);
		console.log('created metas state');
		this.state = { metas: this.props.data };
	}

	render() {
		return (
			<View style={{ backgroundColor: '#D9D9D9', flex: 1 }} >
				<Header name="Piggy Bank" />
				{this.props.renderData}
				<Footer metas={this.state.metas} />
			</View>
		);
	}
}

export default Core;
