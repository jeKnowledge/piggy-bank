import React, { Component } from 'react';
import { View } from 'react-native';
import Metas from '../components/Metas';
import Button from '../components/Button';
import Header from '../components/Header';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { metas: ['Meta 1', 'Meta 2', 'Meta 3'] };
	}

	createMeta = () => {
		this.props.navigator.push({ id: "MetaForm" })
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<Header text="Piggy Bank" color='#673ab7' />
				<Metas data={ this.state.metas } />
				<Button
					text="+"
					onPress={ this.createMeta }
					size='50'
					fontSize='25'
					color='#FFD600'
					fontColor='white'
					style= {{
						bottom: 20,
						right: 20
					}}
				/>
			</View>
		);
	}
}

Home.propTypes = {
	navigator: React.PropTypes.object.isRequired
};
