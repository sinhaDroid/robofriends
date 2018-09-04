import React from 'react';
import Card from './Card';

const CardList = ({
  robots
}) => {
  /* jshint ignore:start */
  return (
    <div>
      {
        robots.map((_user, i) => {
          return (
            <Card 
              key={i} 
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
            />
          );
        })
      }
    </div>
  );
  /* jshint ignore:end */
};

export default CardList;