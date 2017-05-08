import { UPDATE_GOALS, DELETE_GOAL } from './types';

export const updateGoals = goal => {
	return {
		type: UPDATE_GOALS,
		payload: goal
	};
};

export const deleteGoal = goalCode => {
	return {
		type: DELETE_GOAL,
		payload: goalCode
	};
};
