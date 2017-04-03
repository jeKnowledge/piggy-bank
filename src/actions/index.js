import { TITLE_CHANGED, UPDATE_GOALS } from './types';

export const titleChanged = text => {
	return {
		type: TITLE_CHANGED,
		payload: text
	};
};

export const updateGoals = goal => {
	return {
		type: UPDATE_GOALS,
		payload: goal
	};
};
