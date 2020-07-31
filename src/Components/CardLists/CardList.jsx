import React from 'react';
import {Card} from '../Card/Card';
import './CardList.css';

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.superheroes.map((superhero) => (
        <Card key={superhero.id} superhero={superhero}/>
      ))}
    </div>
  );
};

export default CardList;
