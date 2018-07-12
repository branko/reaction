import React from 'react';

class CardCommentForm extends React.Component {
  state = {
    inputText: ''
  }

  handleChange = (e) => {
    this.setState({inputText: e.target.value})
  }

  handleSubmit = () => {
    let inputText = this.state.inputText.trim()
    if (inputText !== '') {
      this.props.handleCommentSubmit(inputText)
      this.setState({inputText: ''})
    }
  }

  render() {
    return (
      <li className="comment-section">
        <h2 className="comment-icon icon">Add Comment</h2>
        <div>
          <div className="member-container">
            <div className="card-member">TP</div>
          </div>
          <div className="comment">
            <label>
              <textarea
                required=""
                rows="1"
                placeholder="Write a comment..."
                value={this.state.inputText}
                onChange={this.handleChange}
              ></textarea>
              <div>
                <a className="light-button card-icon sm-icon"></a>
                <a className="light-button smiley-icon sm-icon"></a>
                <a className="light-button email-icon sm-icon"></a>
                <a className="light-button attachment-icon sm-icon"></a>
              </div>
              <div>
                <input
                  type="submit"
                  className="button"
                  value="Save"
                  onClick={this.handleSubmit}
                />
              </div>
            </label>
          </div>
        </div>
      </li>
    )
  }
}

export default CardCommentForm;
