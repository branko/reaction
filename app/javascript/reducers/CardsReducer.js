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
  } else {
    return state;
  }
}
