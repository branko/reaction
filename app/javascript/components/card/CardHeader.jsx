import React from 'react';

const STYLE = {
  textareaHeight: {
    height: '45px'
  }
}

class CardHeader extends React.Component {
  render() {
    return (
      <header>
        <i className="card-icon icon .close-modal"></i>
        <textarea
          className="list-title"
          style={STYLE.textareaHeight}
          value={this.props.title}
        />
      <p>in list <a className="link">{this.props.listTitle}</a><i className="sub-icon sm-icon"></i>
        </p>
      </header>
    )
  }
}

export default CardHeader;
