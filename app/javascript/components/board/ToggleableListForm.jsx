import React from 'react';
export default class ToggleableListForm extends React.Component {

  onChange = (e) => {
    this.props.onChange(e.target.value)
  }

  submitList = (e) => {
    this.props.onSubmit()
  }

  render () {
    return (
      <div id="new-list" className={"new-list " + (this.props.formOpen ? 'selected' : '')}>
        <span onClick={this.props.toggleForm}>Add a list...</span>
        <input onChange={this.onChange} type="text" placeholder="Add a list..." value={this.props.inputText} />
        <div>
          <input onClick={this.submitList} type="submit" className="button" value="Save" />
          <i onClick={this.props.onClose} className="x-icon icon"></i>
        </div>
      </div>
    )
  }
}
