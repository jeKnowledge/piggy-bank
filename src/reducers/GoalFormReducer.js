import { TITLE_CHANGED, RESET_FORM } from '../actions/types';

const INITIAL_STATE = {
	title: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TITLE_CHANGED:
			return { ...state, title: action.payload };
    case RESET_FORM:
      return { ...state, ...action.payload };
		default:
			return state;
	}
};
