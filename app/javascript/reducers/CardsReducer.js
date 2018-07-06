export default function cardsReducer(state = [], action) {
  if (action.type === 'FETCH_BOARD_SUCCESS') {
    const { lists, ...newBoardWithoutLists } = action.board;
    const cards = lists.reduce((acc, list) => acc.concat(list.cards), [])

    return cards;
  } else {
    return state;
  }
}
