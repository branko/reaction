import React from 'react';
import CardComment from './CardComment'

class CardActivity extends React.Component {
  render() {
    return (
      <li className="activity-section">
        <h2 className="activity-icon icon">Activity</h2>
        <ul className="horiz-list">
          <li className="not-implemented">Show Details</li>
        </ul>
        <ul className="modal-activity-list">
          <CardComment />
          <CardComment />
        </ul>
      </li>
    )
  }
}

export default CardActivity;
