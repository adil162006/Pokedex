import React from 'react'

const Search = ({onSearch}) => {
  async function handleSearch(event) {
    event.preventDefault();
    const query = event.target.elements.search.value;
    console.log("Searching for:", query);
    onSearch(query);
  }

  return (
    <div className='Search'>
        <form onSubmit={handleSearch}>
            <input type="search" name="search" placeholder="Enter Pokemon Name or ID" aria-label="Search"/>
            <button type="submit">Search</button>
        </form>
    </div>
  )
}

export default Search