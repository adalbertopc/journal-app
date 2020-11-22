import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	login,
	startGoogleLogin,
	startLoginEmailPassword,
} from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {
	//hook de react-redeux
	const dispatch = useDispatch();

	const [values, handleInputChanges] = useForm({
		email: 'adal@gmail.com',
		password: '12345',
	});

	const { email, password } = values;

	//dispatch recibe una funcion que tiene un action y payload
	const handleLogin = (e) => {
		e.preventDefault();
		dispatch(startLoginEmailPassword(email, password));
	};

	const handleGoogleLogin = () => {
		dispatch(startGoogleLogin());
	};

	return (
		<div>
			<h3 className='auth__title'>Login</h3>
			<form onSubmit={handleLogin}>
				<input
					type='text'
					placeholder='Email'
					name='email'
					className='auth__input'
					autoComplete='off'
					value={email}
					onChange={handleInputChanges}
				/>
				<input
					type='password'
					placeholder='Password'
					name='password'
					className='auth__input'
					value={password}
					onChange={handleInputChanges}
				/>
				<button className='btn btn-primary btn-block' type='submit'>
					Login
				</button>

				<div className='auth__social-networks'>
					<p>Login with social networks</p>
					<div
						className='google-btn'
						onClick={handleGoogleLogin}
					>
						<div className='google-icon-wrapper'>
							<img
								className='google-icon'
								src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
								alt='google button'
							/>
						</div>
						<p className='btn-text'>
							<b>Sign in with google</b>
						</p>
					</div>
				</div>
			</form>
			<Link className='link' to='/auth/register'>
				Create new account
			</Link>
		</div>
	);
};
