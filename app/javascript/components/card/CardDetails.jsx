import React from 'react';
import LabelList from './LabelList'
import DueDate from './DueDate'
import Description from './Description'

class CardDetails extends React.Component {
  render() {
    return (
      <li className="details-section">
        <ul className="modal-details-list">
          <LabelList
            labels={this.props.labels}
          />
          <DueDate
            dueDate={this.props.dueDate}
          />
        </ul>
        <Description
          description={this.props.description}
        />
      </li>
    )
  }
}

export default CardDetails;
