import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
	return (
		<div className='notes__main-content'>
			<NotesAppBar />
			<div className='notes__content'>
				<input
					type='text'
					placeholder='some awesome '
					className='notes__title-input'
				/>

				<textarea
					placeholder='what happened today'
					className='notes__textarea'
				></textarea>

				<div className='notes__image'>
					<img
						src='https://carlofarucci.com/wp-content/uploads/2018/09/seo-para-imagenes-2019.jpg'
						alt='imagen bonita'
					/>
				</div>
			</div>
		</div>
	);
};
