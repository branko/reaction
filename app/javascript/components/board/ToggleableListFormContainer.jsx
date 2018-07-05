import React from 'react';
import ToggleableListForm from './ToggleableListForm'
import { fetchBoard } from '../../actions/BoardActions'
import PropTypes from 'prop-types'
import apiClient from '../../lib/ApiClient'

export default class ToggleableListFormContainer extends React.Component {
  state = {
    formOpen: false,
    inputText: '',
  }

  toggleForm = () => {
    this.setState(prevState => {
      return {
        formOpen: !prevState.formOpen
      }
    })
  }

  handleChange = (text) => {
    this.setState(prevState => {
      return {
        inputText: text
      }
    })
  }

  handleSubmit = () => {
    apiClient.createList(this.state.inputText, this.props.boardId)
  }

  render() {
    return (
      <ToggleableListForm
        toggleForm={this.toggleForm}
        formOpen={this.state.formOpen}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        inputText={this.state.inputText}
      />
    )
  }
}
