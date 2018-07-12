import React from 'react';
import CardDetails from './CardDetails'
import CardCommentForm from './CardCommentForm'
import CardActivity from './CardActivity'

class CardMain extends React.Component {
  handleCommentSubmit = (commentText) => {
    this.props.handleCommentSubmit(commentText)
  }

  render() {
    let comments = this.props.card.comments || []
    return (
      <section className="modal-main">
        <ul className="modal-outer-list">
          <CardDetails
            labels={this.props.card.labels}
            dueDate={this.props.card.due_date}
            description={this.props.card.description}
            editCard={this.props.editCard}
            handleShowPopover={this.props.handleShowPopover}
          />
          <CardCommentForm
            cardId={this.props.card.id}
            handleCommentSubmit={this.handleCommentSubmit}
          />
          <CardActivity
            comments={comments}
            cardId={this.props.card.id}
          />
        </ul>
      </section>
    )
  }
}

export default CardMain;
