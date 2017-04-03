import { combineReducers } from 'redux';
import GoalsFormReducer from './GoalsFormReducer';
import GoalsReducer from './GoalsReducer';

export default combineReducers({
	goals: GoalsReducer,
	goalsForm: GoalsFormReducer
});
