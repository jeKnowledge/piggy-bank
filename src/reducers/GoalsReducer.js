import { UPDATE_GOALS } from '../actions/types';
import { sha256 } from 'hash.js';

export default (state = null, action) => {
  switch (action.type) {
    case UPDATE_GOALS:
      if (state === null) {
        state = {};
      }
      let key = sha256().update(action.payload.title).digest('hex');
      state[key] = action.payload;
      return { ...state };
		default:
			return state
	}
};
