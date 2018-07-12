import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

export function createCommentRequest() {
  return { type: types.CREATE_COMMENT_REQUEST }
}

export function createCommentSuccess(comment) {
  return { type: types.CREATE_COMMENT_SUCCESS, comment }
}

export function createComment({ cardId, text }, callback) {
  return function(dispatch) {
    dispatch(createCommentRequest());

    apiClient.createComment(cardId, text, newComment => {
      dispatch(createCommentSuccess(newComment))

      if (callback) { callback(newComment); }
    })
  }
}
