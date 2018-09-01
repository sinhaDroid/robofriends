import React from 'react';

const Scroll = (props) => {
	/* jshint ignore:start */
	return (
		<div style={{ overflowY: 'scroll', border: '1px solid black', height: '500px'}}>
			{props.children}
		</div>
	);
	/* jshint ignore:end */
};

export default Scroll;