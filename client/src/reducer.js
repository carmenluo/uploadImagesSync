import axios from 'axios'
const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';
const SUBMIT_SEARCH = 'SUBMIT_SEARCH';
const reducer = (state, action) => {
  switch (action.type) {
    case SET_SEARCH_VALUE:
      return { ...state, searchValue: action.searchValue }
    case SUBMIT_SEARCH:
      axios.get(`https://api.github.com/search/users?q=${state.searchValue}`)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
      console.log(state)
      return { ...state }
  }
}
export { reducer, SET_SEARCH_VALUE, SUBMIT_SEARCH }