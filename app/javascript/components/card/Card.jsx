import React from 'react';
import { Link } from 'react-router-dom';

import CardHeader from './CardHeader'
import CardMain from './CardMain'
import CardButtons from './CardButtons'

class Card extends React.Component {
  archiveBanner() {
    return (
      <div className="archived-banner">
        <i className="file-icon icon">
        </i>This card is archived.
      </div>
    )
  }

  handleCommentSubmit = (commentText) => {
    this.props.handleCommentSubmit(commentText)
  }

  render() {
    return (
      <div id="modal">
        <Link to={`/boards/${this.props.card.board_id}`}>
          <i className="x-icon icon close-modal"></i>
        </Link>

        {this.props.card.archived && this.archiveBanner() }

        <CardHeader
          card={this.props.card}
          listTitle={this.props.listTitle}
          editCard={this.props.editCard}
        />
        <CardMain
          card={this.props.card}
          editCard={this.props.editCard}
          handleCommentSubmit={this.handleCommentSubmit}
        />
        <CardButtons
          archived={this.props.card.archived}
          editCard={this.props.editCard}
        />
      </div>
    )
  }
}

export default Card;
