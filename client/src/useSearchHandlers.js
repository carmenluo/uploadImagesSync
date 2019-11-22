import React, { useState, useEffect, useCallback,useReducer } from 'react'
import {reducer, SET_SEARCH_VALUE, SUBMIT_SEARCH} from './reducer'
import axios from 'axios'
const initState = {
  searchValue: ''
}

// const onChange = (e) => {
//   const query = e.target.value;
//   dispatch({ type: 'load', query })
// }
const useSearchHandlers = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  const setSearchValue = (e) => {
    const searchValue = e.target.value;
    dispatch({type: SET_SEARCH_VALUE, searchValue:searchValue})
  }
  const onSubmit = (
    (e) => {
      e.preventDefault()
        dispatch({ type: SUBMIT_SEARCH })
    }
  )
  useEffect(()=>{
    // axios.get(`https://api.github.com/search/users?q=${state.searchValue}`)
    //   .then((res)=>{
    //     console.log(res)
    //   })
    //   .catch((err)=>{
    //     console.log(err)
    //   })
  })
  return (
    // {  <form>
    //     <input placeholder="Search for..." onChange={this.handleInputChange}/>
    //     <p>{this.state.query}</p>
    //   </form>}
    {
      state,
      setSearchValue,
      onSubmit
    })
}
export default useSearchHandlers;