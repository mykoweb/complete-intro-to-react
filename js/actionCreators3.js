import { SET_SEARCH_TERM, ADD_OMDB_DATA } from './actions3'
import axios from 'axios'

export function setSearchTerm (searchTerm) {
  return { type: SET_SEARCH_TERM, searchTerm: searchTerm }
}

export function addOMDBData (imdbID, omdbData) {
  return { type: ADD_OMDB_DATA, imdbID, omdbData }
}

// This is the thunk part.
// We call getOMDBDetails which returns a function. The returned function will
// get called by Redux.
export function getOMDBDetails (imdbID) {
  return function (dispatch, getState) {
    axios.get(`http://www.omdbapi.com/?i=${imdbID}`)
      .then((response) => {
        dispatch(addOMDBData(imdbID, response.data))
        this.setState({omdbData: response.data})
      })
      .catch((error) => console.error('axios error', error))
  }
}
