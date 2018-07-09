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
        <textarea className="list-title" style={STYLE.textareaHeight}>Cards do many cool things. Click on this card to open it and learn more...</textarea>
        <p>in list <a className="link">Stuff to try (this is a list)</a><i className="sub-icon sm-icon"></i>
        </p>
      </header>
    )
  }
}

export default CardHeader;
