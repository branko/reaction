import React from 'react';
import CardComment from './CardComment'

class CardActivity extends React.Component {
  render() {
    let comments = this.props.comments.map((comment, i) => {
      return (
        <CardComment
          key={'comment-' + i}
          text={comment.text}
          createdAt={comment.created_at}
          updatedAt={comment.updated_at}
        />
      )
    })

    return (
      <li className="activity-section">
        <h2 className="activity-icon icon">Activity</h2>
        <ul className="horiz-list">
          <li className="not-implemented">Show Details</li>
        </ul>
        <ul className="modal-activity-list">
          {comments}
        </ul>
      </li>
    )
  }
}

export default CardActivity;
