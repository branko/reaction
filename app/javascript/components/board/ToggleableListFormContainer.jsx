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

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

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
    apiClient.createList(this.state.inputText, this.props.boardId, () => {
      this.context.store.dispatch(fetchBoard(this.props.boardId))
    })
    this.setState({formOpen: false})
  }

  handleClose = () => {
    this.setState({
      formOpen: false,
    })
  }

  render() {
    return (
      <ToggleableListForm
        toggleForm={this.toggleForm}
        formOpen={this.state.formOpen}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        onClose={this.handleClose}
        inputText={this.state.inputText}
      />
    )
  }
}
