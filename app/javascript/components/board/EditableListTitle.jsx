import React from 'react';
import ListTitle from './ListTitle'
import ListTitleForm from './ListTitleForm'
import { fetchBoard } from '../../actions/BoardActions'
import PropTypes from 'prop-types'
import apiClient from '../../lib/ApiClient'

class EditableListTitle extends React.Component {
  state = {
    formOpen: false,
    inputText: this.props.title
  }

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  handleSubmit = () => {
    apiClient.updateList(this.props.id, {title: this.state.inputText}, () => {
      this.context.store.dispatch(fetchBoard(this.props.boardId))
    })
    this.setState({formOpen: false})
  }

  handleChange = (text) => {
    this.setState({inputText: text})
  }

  handleFormOpen = () => {
    this.setState({formOpen: true})
  }

  render() {
    return (
      <div>
        {this.state.formOpen ? <ListTitleForm inputText={this.state.inputText} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/> : <ListTitle title={this.state.inputText} onClick={this.handleFormOpen} /> }
      </div>
    )
  }
}

export default EditableListTitle;
