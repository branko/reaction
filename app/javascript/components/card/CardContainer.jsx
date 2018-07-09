import React from 'react';
import Card from './Card';

class CardContainer extends React.Component {
  render() {
    return (
      <div id="modal-container">
        <div className="screen"></div>
        <Card />
      </div>
    )
  }
}

export default CardContainer
