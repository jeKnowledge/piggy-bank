import { UPDATE_GOALS } from '../actions/types';

const INITIAL_STATE = [
	{ title: 'Meta 1' },
	{ title: 'Meta 2' },
	{ title: 'Meta 3' }
];

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UPDATE_GOALS:
      console.log(action.payload);
			return [ ...state, action.payload ]
		default:
			return state
	}
};
