import { UPDATE_GOALS } from './types';

export const updateGoals = goal => {
	return {
		type: UPDATE_GOALS,
		payload: goal
	};
};
