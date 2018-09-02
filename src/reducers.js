import { CHANGE_SEARCH_FIELD } from './constants.js';

const initialState = {
  searchField: ''
};

export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { actionsearchField: action.payload });
    default:
      return state;
  }
};