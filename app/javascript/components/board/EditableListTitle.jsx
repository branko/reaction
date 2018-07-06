import React from 'react';
import ListTitle from './ListTitle'
import ListTitleForm from './ListTitleForm'
import apiClient from '../../lib/ApiClient'

class EditableListTitle extends React.Component {
  state = {
    formOpen: false,
    inputText: this.props.title
  }

  handleSubmit = () => {
    apiClient.updateList(this.props.id, {title: this.state.inputText})
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
        {this.state.formOpen ? <ListTitleForm inputText={this.state.inputText} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/> : <ListTitle title={this.props.title} onClick={this.handleFormOpen} /> }
      </div>
    )
  }
}

export default EditableListTitle;
