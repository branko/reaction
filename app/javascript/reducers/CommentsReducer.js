export default function commentsReducer(state = [], action) {
  if (action.type === 'FETCH_CARD_SUCCESS') {
    let commentsWithoutCurrentCard = state.filter(comment => { comment.card_id != action.card.id })
    return commentsWithoutCurrentCard.concat(action.card.comments)
  } else if (action.type === 'CREATE_COMMENT_SUCCESS') {
    return state.concat(action.comment)
  } else {
    return state;
  }
}
