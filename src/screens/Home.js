import React, { Component } from 'react';
import { View } from 'react-native';
import Metas from '../components/Metas';
import Button from '../components/Button';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { metas: ['Meta 1', 'Meta 2', 'Meta 3'] };
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<Metas data={ this.state.metas } />
				<Button
					text="+"
					platform={ this.props.platform }
					onPress={ this._handleButtonPress }
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

	_handleButtonPress() {

	}
}

Home.propTypes = {
	platform: React.PropTypes.string.isRequired
};
