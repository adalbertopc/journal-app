/*
	THUNK es nuestro middleware encargado para actions asincronas
	THUNK es para acciones asincronas como un login o peticion a una bd
*/
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { authReducer } from '../reducers/authReducer';
import { uiReducer } from '../reducers/uiReducer';

const composeEnhancers =
	(typeof window !== 'undefined' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

const reducers = combineReducers({
	auth: authReducer,
	ui: uiReducer,
});

/*
	El store es donde se van a almacenar nuestros states
*/

export const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(thunk))
);
