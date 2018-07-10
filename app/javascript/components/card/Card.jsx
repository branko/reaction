import React from 'react';

import CardHeader from './CardHeader'
import CardMain from './CardMain'
import CardButtons from './CardButtons'

class Card extends React.Component {
  render() {
    return (
      <div id="modal">
        <i className="x-icon icon close-modal"></i>
        <CardHeader
          title={this.props.card.title}
          listTitle={this.props.listTitle}
        />
        <CardMain
          card={this.props.card}
        />
        <CardButtons />
      </div>
    )
  }
}

export default Card;
