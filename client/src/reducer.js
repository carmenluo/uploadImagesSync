import axios from 'axios'
const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';
const SUBMIT_SEARCH = 'SUBMIT_SEARCH';
const SET_REPOS = 'SET_REPOS';
const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
const reducer = (state, action) => {
  switch (action.type) {
    case SET_SEARCH_VALUE:
      return { ...state, searchValue: action.searchValue }
    case SUBMIT_SEARCH:
      return {...state, loading: action.loading}
      // axios.get(`https://api.github.com/search/users?q=${state.searchValue}`)
      //   .then(res => {
      //     console.log(res)
      //     return {...state, loading: false, repos: res.data.items}
      //   })
      //   .catch((err) => {
      //     console.log(err)
      //   })
      // console.log(state)
    case SET_REPOS:
      return {...state, loading: action.loading, repos: action.res}
    case SET_ERROR_MESSAGE:
      return {...state, loading: action.loading, errorMessage: action.errorMessage}
  }
}
export { reducer, SET_SEARCH_VALUE, SUBMIT_SEARCH, SET_REPOS, SET_ERROR_MESSAGE }