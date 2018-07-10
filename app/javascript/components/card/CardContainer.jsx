import React from 'react';
import { Link } from 'react-router-dom';

import Card from './Card';
import PropTypes from 'prop-types';
import { fetchCard, editCard } from '../../actions/CardActions'

class CardContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  }

  componentDidMount() {
    const id = +this.props.match.params.id
    const store = this.context.store
    this.unsubscribe = store.subscribe(() => this.forceUpdate())
    store.dispatch(fetchCard(id))
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  editTitle = ({ title }) => {
    const store = this.context.store
    const id = +this.props.match.params.id
    store.dispatch(editCard({ id, title }))
  }

  render() {
    const id = +this.props.match.params.id
    const store = this.context.store;
    let card = store.getState().cards.find(card => card.id === id)
    let listTitle = store.getState().lists.find(list => list.id === card.list_id).title

    if (card) {
      return (<div id="modal-container">
        <Link to={`/boards/${card.board_id}`}>
          <div className="screen"></div>
        </Link>
        <Card
          card={card}
          listTitle={listTitle}
          editTitle={this.editTitle}
        />
      </div>)
    } else {
      return ''
    }
  }
}

export default CardContainer
