import React, {useEffect , useState} from 'react';
import FilmWidget from "./FilmWidget";

const FilmList = () => {
  return (
    <div className="main__films">
      <FilmWidget/>
    </div>
  )
}

export default FilmList;