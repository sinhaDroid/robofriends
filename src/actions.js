import { CHANGE_SEARCHFIELD } from './constants.js';

export let setSearchField = (text) => ({
  type: CHANGE_SEARCHFIELD,
  payload: text
});