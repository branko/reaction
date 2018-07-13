import React from 'react';
import PropTypes from 'prop-types';

const STYLE = {
  textareaHeight: {
    height: '45px'
  }
}

class CardHeader extends React.Component {
  state = {
    inputText: this.props.card.title
  }

  componentDidMount() {
    this.setState({
      inputText: this.props.card.title
    })
  }

  submitTitle = (title) => {
    this.props.editCard({ title })
  }

  onChange = (e) => {
    this.setState({
      inputText: e.target.value
    })
  }

  onBlur = (e) => {
    this.submitTitle(e.target.value)
  }

  onKeyDown = (e) => {
    if (e.keyCode == 13) {
      e.preventDefault()
    }
  }

  render() {
    return (
      <header>
        <i className="card-icon icon .close-modal"></i>
        <textarea
          onChange={this.onChange}
          onBlur={this.onBlur}
          onKeyDown={this.onKeyDown}
          className="list-title"
          style={STYLE.textareaHeight}
          value={this.state.inputText}
        />
      <p>in list <a className="link">{this.props.listTitle}</a><i className="sub-icon sm-icon"></i>
        </p>
      </header>
    )
  }
}

export default CardHeader;
