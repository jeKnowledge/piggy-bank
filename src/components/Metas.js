import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Meta from './Meta';

class Metas extends Component {
	componentWillMount() {
		this.setState({
			metas: this.props.data,
		});
	}

	renderData = () => {
		return this.state.metas.map(meta => <Meta key={Math.random()} name={meta} />);
	}

	render() {
		return (
			<ScrollView>
				{ this.renderData() }
			</ScrollView>
		);
	}
}

export default Metas;
