import React from 'react';

const FilmWidget = () => {
  return (
    <div className="film">
      <div className="film__prev">
        <img src="../../img/poster.jpeg" alt="" className="film__image"/>
      </div>
      <h3 className="film__title">
        Title
      </h3>
      <p className="film__genre">
        Comedy
      </p>
    </div>
  )
}

export default FilmWidget;