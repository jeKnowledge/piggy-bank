import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from './Button';

class Footer extends Component {
	addMeta = (newMeta) => {
		console.log('Adding new meta');
		const out = this.props.metas;
		out.push(newMeta);
		this.props.metas.setState({ out });
	}

	render() {
		return (
			<View>
				<Text>{this.props.metas.length} Metas</Text>
				<Button
					text='+'
					color='#FFD600'
					fontColor='white'
					size='50'
					fontSize='25'
					onPress={() => { this.addMeta('New Meta'); }}
				/>
			</View>
		);
	}
}

export default Footer;
