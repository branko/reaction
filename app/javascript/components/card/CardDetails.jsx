import React from 'react';
import LabelList from './LabelList'
import DueDate from './DueDate'
import Description from './Description'

class CardDetails extends React.Component {
  render() {
    return (
      <li className="details-section">
        <ul className="modal-details-list">
          <LabelList />
          <DueDate />
        </ul>
        <Description />
      </li>
    )
  }
}

export default CardDetails;
