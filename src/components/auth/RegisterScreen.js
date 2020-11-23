import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { useForm } from '../../hooks/useForm';

//actions del dispatch
import { setError, removeError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {
	const dispatch = useDispatch();
	//para obtener el state de redux se usa useSelector
	const { msgError } = useSelector((state) => state.ui);

	const [values, handleInputChanges] = useForm({
		name: 'Adalberto',
		email: 'adal2@gmail.com',
		password: '123456',
		password2: '123456',
	});

	const { name, email, password, password2 } = values;

	const handleRegister = (e) => {
		e.preventDefault();

		if (isFormValid()) {
			dispatch(
				startRegisterWithEmailPasswordName(email, password, name)
			);
		} else {
			console.log('not ok');
		}
	};

	const isFormValid = () => {
		if (name.trim().length === 0) {
			dispatch(setError('Name is empty'));
			return false;
		} else if (!validator.isEmail(email)) {
			dispatch(setError('Email not valid'));
			return false;
		} else if (password !== password2 && password.length < 5) {
			dispatch(setError('Passwords dont match'));
			return false;
		}
		dispatch(removeError());
		return true;
	};

	return (
		<div>
			<h3 className='auth__title'>Register</h3>
			<form onSubmit={handleRegister}>
				{msgError && (
					<div className='auth__alert-error'>{msgError}</div>
				)}

				<input
					type='text'
					placeholder='Name'
					name='name'
					className='auth__input'
					autoComplete='off'
					value={name}
					onChange={handleInputChanges}
				/>
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
				<input
					type='password'
					placeholder='Confirm password'
					name='password2'
					className='auth__input'
					value={password2}
					onChange={handleInputChanges}
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
