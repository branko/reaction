import axios from 'axios';
import * as routes from '../constants/ApiRoutes';

function logError(errorResponse) {
  const response = errorResponse.response;

  if (response && response.data && response.data.error) {
    console.error(`HTTP Error: ${response.data.error}`);
  } else {
    console.error("Error: ", errorResponse);
  }
}

function unwrapData(response) {
  return response.data;
}

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Accept'] = 'application/json';

const apiClient = {
  getBoards: function(callback) {
    return axios.get(routes.BOARDS_INDEX_URL)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  getBoard: function(id, callback) {
    return axios.get(routes.boardUrl(id))
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  createBoard: function(board, callback) {
    return axios.post(routes.CREATE_BOARD_URL, { board })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  createList: function(title, board_id, callback) {
    return axios.post(routes.CREATE_LIST_URL, { board_id, title })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  createCard: function(listId, title, callback) {
    return axios.post(routes.CREATE_CARD_URL, { list_id: listId, title })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  getCard: function(id, callback) {
    return axios.get(routes.cardUrl(id))
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  updateList: function(list_id, newValues, callback) {
    return axios.put(routes.listUrl(list_id), newValues)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  updateCard: function(cardId, newValues, callback) {
    return axios.put(routes.cardUrl(cardId), newValues)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  }
};

export default apiClient;
