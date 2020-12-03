import React from 'react';

const Search = () => {
  return (
    <>
      <form action="" className="search">
        <input className="search__input" type="text"/>
        <div className="search__tools">
          <div className="search__criteria">
            <span className="search__title">search by</span>
            <label htmlFor="input">title</label>
              <input type="checkbox" className="search__by"/>
            <label htmlFor="input">genre</label>
              <input type="checkbox" className="search__by"/>
          </div>
          <button className="search__button">
            search
          </button>
        </div>
      </form>
    </>
  )
}

export default Search