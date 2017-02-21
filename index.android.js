import React from 'react';
import { AppRegistry, Navigator, Text } from 'react-native';
import Metas from './src/components/Metas';
import Core from './src/components/Core';

const App = () => {
	const metas = ['Meta 1', 'Meta 2', 'Meta 3'];

	return (
		<Navigator
			initialRoute={{ id: 'Metas' }}
			renderScene={(route, navigator) => {
				switch (route.id) {
					case 'Metas':
						return (
							<Core
								data={metas}
								navigator={navigator}
								route={route}
								renederData={<Metas data={metas} />}
							/>
						);
					case 'Test':
						return (
							<Core renderData={<Text>Testing Ground</Text>} />
						);
					default:
						return (
							<Core renderData={<Text>No data was passed</Text>} />
						);
				}
			}}
		/>
	);
};

AppRegistry.registerComponent('piggyBank', () => App);
