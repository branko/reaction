import React from 'react';
import ListListing from './ListListing'
import ToggleableListFormContainer from './ToggleableListFormContainer'
import { fetchBoard } from '../../actions/BoardActions'
import { createCard } from '../../actions/CardActions'
import PropTypes from 'prop-types'

export default class ListListContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  componentDidMount() {
    let id = this.props.match.params.id
    let store = this.context.store;

    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate()
    });

    store.dispatch(fetchBoard(id))
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  submitNewCard = (listId, title) => {
    let store = this.context.store;
    store.dispatch(createCard({ listId, title }));
  }

  render() {
    let store = this.context.store;

    let id = +this.props.match.params.id;

    if (this.props.match.params[0] === 'cards') {
      id = store.getState().cards.find(c => c.id === id).board_id
    }

    let lists = store.getState().lists.filter(list => list.board_id === +id);

    return(
      <main>
        <div id="list-container" className="list-container">
          <ListListing
            lists={lists}
            submitNewCard={this.submitNewCard}
          />
          <ToggleableListFormContainer
            boardId = {this.props.match.params.id}
          />
        </div>
      </main>
    );
  }
}
