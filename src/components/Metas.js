import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Meta from './Meta';

class Metas extends Component {
	constructor(props) {
		super(props);
		this.state = {
			metas: []
		};
	}

	componentWillMount() {
		this.setState({ metas: this.props.data });
	}

	renderData() {
		return this.state.metas.map(meta => <Text>{ meta }</Text>);
	}

	render() {
		return (
			<View>
				<Meta>{ this.renderData() }</Meta>
			</View>
		);
	}
}

export default Metas;
