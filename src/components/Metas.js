import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Meta from './Meta';

class Metas extends Component {
	renderData = () => {
		return this.props.data.map(meta => <Meta key={Math.random()} name={meta} />);
	}

	render() {
		return (
			<ScrollView>
				{ this.renderData() }
			</ScrollView>
		);
	}
}

Metas.propTypes = {
	data: React.PropTypes.array.isRequired,
};

export default Metas;
