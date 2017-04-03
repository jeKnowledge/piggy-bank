import { TITLE_CHANGED } from '../actions/types';

const INITIAL_STATE = {
	title: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TITLE_CHANGED:
			return { ...state, title: action.payload };
		default:
			return state
	}
};
