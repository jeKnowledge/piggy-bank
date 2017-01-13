import React, { Component } from 'react';
import { View, Text } from 'react-native';

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
				{ this.renderData() }
			</View>
		);
	}
}

export default Metas;
