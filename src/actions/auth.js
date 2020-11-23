import { firebase, googleAuthProvider } from '../firebase/firebase-config';

import { types } from '../types/types';

//usando async y await en vez de then
export const startLoginEmailPassword = (email, password) => {
	return async (dispatch) => {
		try {
			const res = await firebase
				.auth()
				.signInWithEmailAndPassword(email, password);
			const { user } = res;
			dispatch(login(user.uid, user.displayName));
		} catch (ex) {
			console.log(ex);
		}
	};
};

export const startGoogleLogin = () => {
	return (dispatch) => {
		firebase
			.auth()
			.signInWithPopup(googleAuthProvider)
			.then(({ user }) => dispatch(login(user.uid, user.displayName)));
	};
};

export const startRegisterWithEmailPasswordName = (email, password, name) => {
	return (dispatch) => {
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(async ({ user }) => {
				await user.updateProfile({ displayName: name });
				dispatch(user.uid, user.displayName);
			})
			.catch((ex) => console.log(ex));
	};
};

//simple funcion que retorna el action
export const login = (uid, displayName) => ({
	type: types.LOGIN,
	payload: {
		uid,
		displayName,
	},
});
