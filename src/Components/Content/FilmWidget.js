import React from 'react';
import PropTypes from 'prop-types'

const FilmWidget = ({film}) => {
    return (
      <li key={film.id} className="film" >
        <div className="film__prev">
          <img src={film.poster_path} alt="" className="film__image"/>
        </div>
        <div className="film__description">
          <h3 className="film__title">
            {film.title}
          </h3>
          <span>
            {new Date(film.release_date).getFullYear()}
          </span>
          <p className="film__genre">
            {film.genres[0]}
          </p>
        </div>
      </li>
    )
}

FilmWidget.propTypes = {
  film: PropTypes.object
}

export default FilmWidget;