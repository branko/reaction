import React from 'react';
import { Link } from 'react-router-dom';

import Card from './Card';
import LabelsForm from './LabelsForm';
import Popover from '../shared/Popover';
import PropTypes from 'prop-types';
import { fetchCard, editCard } from '../../actions/CardActions'
import { fetchBoard } from '../../actions/BoardActions'
import { createComment } from '../../actions/CommentActions'

class CardContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  }

  state = {
    popover: {
      visible: false,
      attachedTo: null,
      type: null
    }
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

  popoverChildren() {
    const id = +this.props.match.params.id
    const store = this.context.store;
    let card = store.getState().cards.find(card => card.id === id)

    if (this.state.popover.visible && this.state.popover.type) {
      return (
        <LabelsForm
          handleClosePopover={this.handleClosePopover}
          editCard={this.editCard}
          labels={card.labels}
        />
      )
    }
  }

  editCard = (newValues) => {
    const store = this.context.store
    const id = +this.props.match.params.id
    store.dispatch(editCard(id, newValues))
  }

  handleCommentSubmit = (commentText) => {
    const store = this.context.store
    const cardId = +this.props.match.params.id
    const text = commentText
    store.dispatch(createComment({ cardId, text }))
  }

  closePopover = () => {
    this.setState({
      popover: {
        type: null,
        attachedTo: null,
        visible: false
      }
    });
  }

  handleShowPopover = (e, type) => {
    e.stopPropagation();

    this.setState({
      popover: {
        type,
        attachedTo: e.target,
        visible: true
      }
    });
  };

  handleClosePopover = (e) => {
    e.preventDefault()
    this.closePopover()
  }

  handleOverlayClick = (e) => {
    this.closePopover()
  };

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
          editCard={this.editCard}
          handleCommentSubmit={this.handleCommentSubmit}
          handleShowPopover={this.handleShowPopover}
          handleClosePopover={this.handleClosePopover}
          handleOverlayClick={this.handleOverlayClick}
        />
        <Popover {...this.state.popover}>
          {this.popoverChildren()}
        </Popover>
      </div>)
    } else {
      return ''
    }
  }
}

export default CardContainer
