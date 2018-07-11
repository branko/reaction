import React from 'react';
import { Link } from 'react-router-dom';

import CardHeader from './CardHeader'
import CardMain from './CardMain'
import CardButtons from './CardButtons'

class Card extends React.Component {

  render() {
    return (
      <div id="modal">
        <Link to={`/boards/${this.props.card.board_id}`}>
          <i className="x-icon icon close-modal"></i>
        </Link>
        <CardHeader
          card={this.props.card}
          listTitle={this.props.listTitle}
          editCard={this.props.editCard}
        />
        <CardMain
          card={this.props.card}
          editCard={this.props.editCard}
        />
        <CardButtons />
      </div>
    )
  }
}

export default Card;
