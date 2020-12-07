import React, {useEffect, useState} from 'react';
import FilmWidget from "./FilmWidget";
import ErrorBoundary from "../ErrorBoundary";


const FilmList = () => {
  const [films, setFilms] = useState([])
  const [error, setError] = useState(false)
  useEffect(() => {
    // const url = "data.json"
    
      fetch("./data.json")
        .then(res => res.json())
        .then(
          (result) => {
            setFilms(result.data)
          },
        )
        .catch (e => {
          setError(e);
          console.log(e)
        })
  }, [])

  return (
      <div className="main__films">
        <ul className="films__list">
          <ErrorBoundary>
            <FilmWidget films={films}/>
          </ErrorBoundary>
        </ul>
      </div>
  )
}

export default FilmList;