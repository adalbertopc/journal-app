import { types } from '../types/types';
/*
	authReducer en caso de que type sea LOGIN va a retornar un id y nombre
	obtenido desde firebase. Si es LOGOUT va a retornar un arreglo vacio
*/
export const authReducer = (state = {}, action) => {
	switch (action.type) {
		case types.LOGIN:
			return {
				uid: action.payload.uid,
				name: action.payload.displayName,
			};

		case types.LOGOUT:
			return {};

		default:
			return state;
	}
};
