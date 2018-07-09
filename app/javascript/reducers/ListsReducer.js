export default function listsReducer(state = [], action) {
  if (action.type === 'FETCH_BOARD_SUCCESS') {
    const listsWithoutCards = action.board.lists.map(list => {
      let { cards, ...listWithoutCards } = list;
      return listWithoutCards;
    })

    return listsWithoutCards;
  } else if (action.type === 'CREATE_LIST_SUCCESS') {
    return state.concat(action.list)
  } else {
    return state;
  }
}
