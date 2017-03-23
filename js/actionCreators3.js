import { SET_SEARCH_TERM } from './actions3'

export function setSearchTerm (searchTerm) {
  return { type: SET_SEARCH_TERM, searchTerm: searchTerm }
}
