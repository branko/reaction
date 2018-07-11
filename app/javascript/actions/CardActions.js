import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

export function createCardRequest() {
  return { type: types.CREATE_CARD_REQUEST };
}

export function createCardSuccess(card) {
  return { type: types.CREATE_CARD_SUCCESS, card };
}

export function fetchCardRequest() {
  return { type: types.FETCH_CARD_REQUEST };
}

export function fetchCardSuccess(card) {
  return { type: types.FETCH_CARD_SUCCESS, card };
}

export function editCardRequest(card) {
  return { type: types.EDIT_CARD_REQUEST };
}

export function editCardSuccess(card) {
  return { type: types.EDIT_CARD_SUCCESS, card };
}

export function createCard({ listId, title }, callback) {
  return function(dispatch) {
    dispatch(createCardRequest());

    apiClient.createCard(listId, title, newCard => {
      dispatch(createCardSuccess(newCard))

      if (callback) { callback(newCard); }
    })
  }
}

export function fetchCard(id, callback) {
  return function(dispatch) {
    dispatch(fetchCardRequest());

    apiClient.getCard(id, card => {
      dispatch(fetchCardSuccess(card))

      if (callback) { callback(card) }
    })
  }
}

export function editCard(id, newValues, callback) {
  return function(dispatch) {
    dispatch(editCardRequest())

    apiClient.updateCard(id, newValues, card => {
      dispatch(editCardSuccess(card))

      if (callback) { callback(card); }
    })
  }
}
