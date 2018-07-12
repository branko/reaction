import React from 'react';
import $ from 'jquery';

export default class LabelsForm extends React.Component {
  allLabels = ["green", "yellow", "orange", "red", "purple", "blue"]

  handleClosePopover = (e) => {
    this.props.handleClosePopover(e)
  }

  handleAddLabel = (e) => {
    const labelId = Number($(e.target).attr('data-id'))
    const label = this.allLabels[labelId]
    this.props.editCard({ labels: this.props.labels.concat(label) })
  }

  handleRemoveLabel = (e) => {
    const labelId = Number($(e.target).attr('data-id'))
    const label = this.allLabels[labelId]
    const labels = this.props.labels.filter(l => l !== label)

    this.props.editCard({ labels })
  }

  render() {
    const labelComponents = this.allLabels.map((label, i) => {
      if (this.props.labels.includes(label)) {
        return (
          <li key={'label-' + i} onClick={this.handleRemoveLabel}>
            <div className={label + " colorblindable"} data-id={i}><i className="check-icon sm-icon"></i></div>
            <div className={"label-background " + label}></div>
            <div className="label-background-overlay"></div><i className="edit-icon icon not-implemented"></i>
          </li>
        )
      } else {
        return (
          <li key={'label-' + i} onClick={this.handleAddLabel}>
            <div className={label + " colorblindable"} data-id={i}><i className="sm-icon"></i></div>
            <div className={"label-background " + label}></div>
            <div className="label-background-overlay"></div><i className="edit-icon icon not-implemented"></i>
          </li>
        )
      }
    })

    return (
      <div id="add-options-labels-dropdown">
        <header>
          <span>Labels</span>
          <a href="#" className="icon-sm icon-close" onClick={this.handleClosePopover}></a>
        </header>
        <div className="content">
          <input className="dropdown-input" placeholder="Search labels..." type="text" />
          <div className="labels-search-results">
            <ul className="label-list">
              {labelComponents}
            </ul>
            <ul className="light-list">
              <li className="not-implemented">Create a new label</li>
              <hr />
              <li className="toggleColorblind">Enable color blind friendly mode.</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
