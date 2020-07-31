import React from 'react';
import './Card.css';

export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.superhero.id}?set=set2`}
        alt="superhero"
      />
      <h2>{props.superhero.name}</h2>
      <p>{props.superhero.email}</p>
    </div>
  );
};
