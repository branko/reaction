import React from 'react';
import LabelList from './LabelList'
import DueDate from './DueDate'
import ToggleableDescriptionForm from './ToggleableDescriptionForm'

class CardDetails extends React.Component {
  render() {
    return (
      <li className="details-section">
        <ul className="modal-details-list">
        {this.props.labels.length !== 0 && <LabelList labels={this.props.labels} handleShowPopover={this.props.handleShowPopover}/>}
        {this.props.dueDate !== null && <DueDate dueDate={this.props.dueDate} completed={this.props.completed} editCard={this.props.editCard}/>}
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
