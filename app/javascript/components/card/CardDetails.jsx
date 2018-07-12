import React from 'react';
import LabelList from './LabelList'
import DueDate from './DueDate'
import ToggleableDescriptionForm from './ToggleableDescriptionForm'

class CardDetails extends React.Component {
  render() {
    return (
      <li className="details-section">
        <ul className="modal-details-list">
          <LabelList
            labels={this.props.labels}
            handleShowPopover={this.props.handleShowPopover}
          />
          <DueDate
            dueDate={this.props.dueDate}
          />
        </ul>
        <ToggleableDescriptionForm
          description={this.props.description}
          editCard={this.props.editCard}
        />
      </li>
    )
  }
}

export default CardDetails;
