import "./App.css";
import React, { useState } from "react";
import { SearchForm } from "./components/Form";
import { ListContainer } from "./components/ListContainer";

function App() {
  const [movieList, setMovieList] = useState([]);

  const addToList = (movie) => {
    const arg = movieList.filter((item) => item.imdbID !== movie.imdbID);
    setMovieList([...arg, movie]);
    // setMovieList(movie);
  };
  console.log(movieList);

  const handleOnDelete = (id) => {
    const arg = movieList.filter((item) => item.imdbID !== id);
    setMovieList(arg);
    console.log(id);
    console.log(arg);
  };

  // console.log(pmovie);

  return (
    <div className='wrapper bg-dark text-warning'>
      <div className='container'>
        <div className='row'>
          <div className='col text-center mt-5 fs-1 '>
            {/* tittle section  */}
            My Movie
          </div>
          <hr />
        </div>

        {/* form section  */}
        <SearchForm addToList={addToList} />

        {/* list section  */}
        <ListContainer
          movieList={movieList}
          handleOnDelete={handleOnDelete}
        />
      </div>
    </div>
  );
}

export default App;
