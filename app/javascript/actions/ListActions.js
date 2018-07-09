// apiClient.createList(this.state.inputText, this.props.boardId, () => {
//   this.context.store.dispatch(fetchBoard(this.props.boardId))
// })

import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

export function createListRequest() {
  return { type: types.CREATE_LIST_REQUEST };
}

export function createListSuccess(list) {
  return { type: types.CREATE_LIST_SUCCESS, list };
}

export function editListRequest() {
  return { type: types.EDIT_LIST_REQUEST };
}

export function editListSuccess(list) {
  return { type: types.EDIT_LIST_SUCCESS, list };
}

export function createList({ boardId, title }, callback) {
  return function(dispatch) {
    dispatch(createListRequest());

    apiClient.createList(title, boardId, newList => {
      dispatch(createListSuccess(newList))

      if (callback) { callback(newList); }
    })
  }
}

export function editList({ id, title }, callback) {
  return function(dispatch) {
    dispatch(editListRequest())

    apiClient.updateList(id, { title }, list => {
      dispatch(editListSuccess(list))

      if (callback) { callback(list); }
    })
  }
}
