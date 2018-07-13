import React from 'react';
import Card from './Card';

const CardList = ({ cards }) => {

  let cardList = cards
    .filter(card => card.archived === false)
    .sort((a, b) => {
      return new Date(a.created_at) - new Date(b.created_at)
    })
    .map((card, i) => {
      return (
        <Card
          key={'card-' + i}
          card={card}
        />
      )
    })

  return (
    <div id="cards-container" data-id="list-1-cards">
      {cardList}
    </div>
  );
}

export default CardList;
