import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	/* jshint ignore:start */
	return (
		<div className='pa2'>
			<input
				className='pa3 ba b--green bg-lightest-blue'
				type='search'
				placeholder='search robots'
				onChange={searchChange}
			/>
		</div>
	);
	/* jshint ignore:end */
};

export default SearchBox;