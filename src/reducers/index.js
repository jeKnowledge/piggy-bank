import { combineReducers } from 'redux';
import GoalFormReducer from './GoalFormReducer';
import GoalsReducer from './GoalsReducer';

export default combineReducers({
	goals: GoalsReducer,
	goalForm: GoalFormReducer
});
