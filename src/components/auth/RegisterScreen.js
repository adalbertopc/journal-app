import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
	return (
		<div>
			<h3 className='auth__title'>Register</h3>
			<form>
				<input
					type='text'
					placeholder='Name'
					name='name'
					className='auth__input'
					autoComplete='off'
				/>
				<input
					type='text'
					placeholder='Email'
					name='email'
					className='auth__input'
					autoComplete='off'
				/>
				<input
					type='password'
					placeholder='Password'
					name='password'
					className='auth__input'
				/>
				<input
					type='password'
					placeholder='Confirm password'
					name='password2'
					className='auth__input'
				/>
				<button
					className='btn btn-primary btn-block mb-5'
					type='submit'
				>
					Register
				</button>
			</form>
			<Link className='link' to='/auth/login'>
				Already registered?
			</Link>
		</div>
	);
};
