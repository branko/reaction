import React from 'react';

export default class DescriptionForm extends React.Component {
  state = {
    inputText: this.props.description || ''
  }

  handleSubmit = (e) => {
    let description = this.state.inputText
    this.props.editCard({ description })
    this.props.handleToggleForm()
  }

  handleChange = (e) => {
    this.setState({inputText: e.target.value})
  }

  render() {
    return (
      <form className="description">
        <p>Description</p>
        <textarea
          className="textarea-toggle"
          rows="1" autoFocus=""
          value={this.state.inputText}
          onChange={this.handleChange}
        ></textarea>
        <div>
          <div className="button" value="Save" onClick={this.handleSubmit}>Save</div>
          <i className="x-icon icon" onClick={this.props.handleToggleForm}></i>
        </div>
      </form>
    )
  }
}
