import React, { useState } from 'react';
const Search = (props) => {

  return (
    <form className='search'>
      <h2 className="heading">Live Search: React Application</h2>
      <label className='search-label' htmlFor='search-input'>
        <input placeholder="Search for..." type='text' value={props.value} onChange={props.onChange} />
        {/* <i className="fas fa-search"> */}
          <input onClick={props.onSubmit} type="submit" value="SEARCH" />
        {/* </i> */}
      </label>
    </form>
  )
}
export default Search;