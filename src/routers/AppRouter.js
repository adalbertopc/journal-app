import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
export const AppRouter = () => {
	return (
		<div>
			<Router>
				<div>
					<Switch>
						<Route path='/auth' component={AuthRouter} />
						<Route exact path='/' component={JournalScreen} />
						<Redirect to='/auth/login' />
					</Switch>
				</div>
			</Router>
		</div>
	);
};
