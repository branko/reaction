export default function cardsReducer(state = [], action) {
  if (action.type === 'FETCH_BOARD_SUCCESS') {
    const { lists, ...newBoardWithoutLists } = action.board;
    const cards = lists.reduce((acc, list) => acc.concat(list.cards), [])

    return cards;
  } else if (action.type === 'CREATE_CARD_SUCCESS') {
    return state.concat(action.card)
  } else if (action.type === 'FETCH_CARD_SUCCESS') {
    let cardsExcludingNewCard = state.filter(card => card.id !== action.card.id)

    return cardsExcludingNewCard.concat(action.card)
  } else if (action.type === 'EDIT_CARD_SUCCESS') {
    let card = state.find(card => card.id === action.card.id)
    let cardsExcludingEditedCard = state.filter(card => card.id !== action.card.id)
    action.card.comments = card.comments || []

    return cardsExcludingEditedCard.concat(action.card)
  } else if (action.type === 'CREATE_COMMENT_SUCCESS') {
    let cardsExcludingCommentedCard = state.filter(card => card.id !== action.comment.card_id)
    let card = state.find(card => card.id === action.comment.card_id)

    card.comments = card.comments.concat(action.comment)
    return cardsExcludingCommentedCard.concat(card)
  } else {
    return state;
  }
}
