import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Search = ({onSearch}) => {
  async function handleSearch(event) {
    event.preventDefault();
    const query = event.target.elements.search.value;
    console.log("Searching for:", query);
    onSearch(query);
  }



  return (
    <div className='Search'>
        <form class="d-flex" onSubmit={handleSearch}>
            <input class="form-control me-2" type="search" name="search" placeholder="Enter Pokemon Name or ID" aria-label="Search"/>
            <button class="btn btn-outline-primary" type="submit" >Search</button>
        </form>

    </div>
  )
}

export default Search