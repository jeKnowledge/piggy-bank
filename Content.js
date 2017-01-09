import React, { Component } from 'react';

export default class Content extends Component {
	render() {
		if(this.prop.index == 0) {
			routeLabel = "Scene 0";
		} else if(this.prop.index == 1) {
			routeLabel = "Scene 1";
		} else if(this.prop.index > 1) {
			routeLabel = "Scene Overflow"
		}

		return (
			<View>
				<Text>{routeLabel}</Text>
				<Button onPress={this.nextScene} title="Next Scene";/>
				<Button onPress={this.prevScene} title="Previous Scene";/>
			</View>
		);
	}
}

MyScene.propTypes = {
	index: PropTypes.int.isRequired,
	onForward: PropTypes.func.isRequired,
	onBack: PropTypes.func.isRequired,
};
