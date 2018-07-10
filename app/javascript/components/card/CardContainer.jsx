import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import { fetchCard } from '../../actions/CardActions'

class CardContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  }

  state = {
    card: {
      id: undefined,
      title: '',
      board_id: undefined,
      due_date: undefined,
      labels: [],
      actions: [],
    },
    listTitle: ''
  }

  componentDidMount() {
    const id = +this.props.match.params.id
    const store = this.context.store
    this.unsubscribe = store.subscribe(() => this.forceUpdate())
    store.dispatch(fetchCard(id, (card) => {
      this.setState(
        {
          card,
          listTitle: store.getState().lists.find(list => list.id === card.list_id).title
        }
      )
    }))
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    return (
      <div id="modal-container">
        <div className="screen"></div>
        <Card
          card={this.state.card}
          listTitle={this.state.listTitle}
        />
      </div>
    )
  }
}

export default CardContainer
