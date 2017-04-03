import { UPDATE_GOALS } from '../actions/types';

const INITIAL_STATE = [
	{ name: 'Meta 1' },
	{ name: 'Meta 2' },
	{ name: 'Meta 3' }
];

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UPDATE_GOALS:
			return [ ...state, action.payload ]
		default:
			return state
	}
};
