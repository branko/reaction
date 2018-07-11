import React from 'react';
import Description from './Description'
import DescriptionForm from './DescriptionForm'

export default class ToggleableDescriptionForm extends React.Component {
  state = {
    isFormOpen: false
  }

  onSubmit = (e) => {
    this.props.editCard()
  }

  handleToggleForm = () => {
    this.setState((prevState) => {
      return {isFormOpen: !prevState.isFormOpen}
    })
  }

  render() {
    if (this.state.isFormOpen) {
      return (
        <DescriptionForm
          description={this.props.description}
          editCard={this.props.editCard}
          handleToggleForm={this.handleToggleForm}
        />
      )
    } else {
      return (
        <Description
          description={this.props.description}
          handleToggleForm={this.handleToggleForm}
        />
      )
    }
  }
}
