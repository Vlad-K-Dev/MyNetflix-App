import React from 'react';
import PropTypes from 'prop-types'
const FilmWidget = (film) => {
  return (
    <li className="film" key={film.film.id}>
      <div className="film__prev">
        <img src={film.film.poster_path} alt="" className="film__image"/>
      </div>
      <div className="film__description">
        <h3 className="description__title">
          {film.film.title}
        </h3>
        <p className="description__genre">
        </p>
      </div>
    </li>
  )
}
FilmWidget.propTypes = {
  film: PropTypes.object
}

export default FilmWidget;