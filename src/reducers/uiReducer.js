import { types } from '../types/types';

const initialState = {
	loading: false,
	msgError: '',
};

export const uiReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.UI_SET_ERROR:
			return {
				...state,
				msgError: action.payload,
			};
		case types.UI_REMOVE_ERROR:
			return {
				...state,
				msgError: action.payload,
			};
		default:
			return state;
	}
};
