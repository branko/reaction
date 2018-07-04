import React from 'react';
import PropTypes from 'prop-types'
import CardList from './CardList'

export default class CardListContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    let list_id = this.props.list_id;
    let store = this.context.store;
    let cards = store.getState().cards.filter(card => card.list_id === list_id);

    return(
      <CardList
        cards={cards}
      />
    );
  }
}
