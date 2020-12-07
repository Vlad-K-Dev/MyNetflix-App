import React, {useEffect, useState} from 'react';
import FilmWidget from "./FilmWidget";
import ErrorBoundary from "../ErrorBoundary";


const FilmList = () => {
  const [films, setFilms] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  useEffect(() => {
     const url = "https://reactjs-cdp.herokuapp.com/movies"
      fetch(url)
        .then(res => res.json())
        .then(
          (result) => {
            setFilms(result.data)
          },
        )
        .catch (e => {
          setErrorMessage(e);
          console.log(e)
        })
  }, [])

  return (
      <div className="main__films">
        <ul className="films__list">
          <ErrorBoundary error={errorMessage}>
            {
              films.map(film => {
                return  <FilmWidget film={film}/>
              })
            }
          </ErrorBoundary>
        </ul>
      </div>
  )
}

export default FilmList;