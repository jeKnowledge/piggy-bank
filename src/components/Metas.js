import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Meta from './Meta';
import Button from './Button';

class Metas extends Component {
	componentWillMount() {
		this.setState({
			metas: this.props.data,
		});
	}

	addMeta() {
		console.log('Pressed button');
		/*this.props.navigator.push({
			id: 'Test'
		});*/
	}

	renderData() {
		console.log('testing');
		return this.state.metas.map(meta => <Meta key={Math.random()} name={meta} />);
	}

	render() {
		return (
			<View>
				{ this.renderData() }
				<View>
					<Text>{this.state.metas.length} Metas</Text>
					<Button
						text='+'
						color='#8783FF'
						fontColor='white'
						size='50'
						fontSize='25'
						onPress={this.addMeta()}
					/>
				</View>
			</View>
		);
	}
}

export default Metas;
