import React from 'react';

export const JournalEntry = () => {
	return (
		<div className='journal__entry pointer'>
			<div
				className='journal__entry-picture'
				style={{
					backgroundSize: 'cover',
					backgroundImage:
						'url(http://www.ocho32.com/wp-content/uploads/2018/11/Image-1-800x800-9.jpg)',
				}}
			></div>
			<div className='journal__entry-body'>
				<p className='journal__entry-title'>Un nuevo dia</p>
				<p className='journal__entry-content'>
					Amet nostrud cupidatat elit duis incididunt labore qui.
				</p>
			</div>
			<div className='journal_entry-date-box'>
				<span>Monday</span>
				<h4>28</h4>
			</div>
		</div>
	);
};
