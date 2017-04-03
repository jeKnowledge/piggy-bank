import { TITLE_CHANGED } from './types';

export const titleChanged = (text) => {
	return {
		type: TITLE_CHANGED,
		payload: text
	};
};
