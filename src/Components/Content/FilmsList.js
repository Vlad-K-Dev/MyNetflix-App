import React, {useEffect, useState} from 'react';
import FilmWidget from "./FilmWidget";


const FilmList = () => {
  const [films, setFilms] = useState([])

  useEffect(() => {
    const url = 'https://reactjs-cdp.herokuapp.com/movies';
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          setFilms(result.data)
        },
      )
  }, [])

  return (
      <div className="main__films">
        <ul className="films__list">
          {
            films.map((item) => {
              return (
                <FilmWidget film={item}/>
              )
            })
          }
        </ul>
      </div>
  )
}

export default FilmList;