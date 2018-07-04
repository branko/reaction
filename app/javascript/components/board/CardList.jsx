import React from 'react';
import Card from './Card';

const CardList = ({ cards }) => {
  let cardList = cards.map(card => {
    return <Card key={card.id}
                 title={card.title}
            />
  })

  return (
    <div id="cards-container" data-id="list-1-cards">
      {cardList}
    </div>
  );
}

export default CardList;
