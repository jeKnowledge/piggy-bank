import { UPDATE_GOALS, DELETE_GOAL } from '../actions/types';
import { sha256 } from 'hash.js';

export default (state = null, action) => {
  switch (action.type) {
    case UPDATE_GOALS:
      if (action.payload.title == '') {
        return { ...state };
      } else if (state === null) {
        state = {};
      }

      let goalCode = sha256().update(action.payload.title).digest('hex');
      state[goalCode] = action.payload;
      return { ...state };
    case DELETE_GOAL:
      delete state[action.payload]
      return { ...state };
		default:
			return state
	}
};
