import React from 'react';

const Scroll = (props) => {
  /* jshint ignore:start */
  return (
    <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px'}}>
      {props.children}
    </div>
  );
  /* jshint ignore:end */
};

export default Scroll;