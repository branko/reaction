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

  onChange = (e) => {
    this.setState({
      inputText: e.target.value
    })
  }

  onBlur = (e) => {
    this.props.editCard({ title: e.target.value })
  }

  render() {
    return (
      <header>
        <i className="card-icon icon .close-modal"></i>
        <textarea
          onChange={this.onChange}
          onBlur={this.onBlur}
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
