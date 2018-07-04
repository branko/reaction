export default function listsReducer(state = [], action) {
  if (action.type === 'FETCH_BOARD_SUCCESS') {
    const listsWithoutCards = action.board.lists.map(list => {
      let { cards, ...listWithoutCards } = list;
      return listWithoutCards;
    })

    return state.concat(listsWithoutCards);
  } else {
    return state;
  }
}
