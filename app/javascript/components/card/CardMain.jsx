import React from 'react';
import CardDetails from './CardDetails'
import CardCommentForm from './CardCommentForm'
import CardActivity from './CardActivity'

class CardMain extends React.Component {
  render() {
    return (
      <section className="modal-main">
        <ul className="modal-outer-list">
          <CardDetails
            labels={this.props.card.labels}
            dueDate={this.props.card.due_date}
            description={this.props.card.description}
            editCard={this.props.editCard}
          />
          <CardCommentForm />
          <CardActivity

          />
        </ul>
      </section>
    )
  }
}

export default CardMain;
