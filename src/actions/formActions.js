import { TITLE_CHANGED, RESET_FORM } from './types';

export const titleChanged = text => {
	return {
		type: TITLE_CHANGED,
		payload: text
	};
};

export const resetForm = (newState = {}) => {
  return {
    type: RESET_FORM,
    payload: newState
  };
}
