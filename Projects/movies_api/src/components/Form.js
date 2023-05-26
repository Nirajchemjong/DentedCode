import React, { useState } from "react";
import { CustomCard } from "./CustomCard";
import { fetchData } from "../helper/axiosHelper";

export const SearchForm = ({ addToList }) => {
  const [value, setValue] = useState("");
  const [movie, setMovie] = useState({});
  const [IsError, setIsError] = useState("");

  // =========process to understand ==========
  //   1.get the data fro the form on change
  //   2. on form submit, use the searched data to call the api
  //   3. receive the data from the api and mount in the state
  //   4.use CUstomeCard and set state data as a props
  //   5. receive the props and show it to the card.
  //   what is RestFull api

  ////using HandleOnChange

  const handleOnChange = (e) => {
    const { value } = e.target;

    setValue(value);
    // console.log(value);
  };

  const handleOnDelete = () => {
    setMovie({});
  };

  /// pasing addtolist fucntion

  const handleOnAddbtn = (type) => {
    addToList({ ...movie, type });
    setMovie({});
  };
  ///using HandleOnAwesom

  //   const handleOnAwesome = () => {
  //     addToList();
  //   };

  //   =========================using handleOnSubmit=========

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // api = `https://www.omdbapi.com/?apikey=1a3d22ff&t=` + value;

    //calling the API
    const data = await fetchData(value);
    console.log(data);

    if (data?.imdbID) {
      setMovie(data);
      setIsError(false);
    } else {
      setIsError(true);
      setMovie({});
    }
    // data?.imdbID ? setMovie(data) && setIsError(false) : setIsError(true); tertianry if else

    ///Another way of Calling API.==========
    // const response = await axios(api);
    // console.log(response);
    ///calling the API
    // axios  for calling RestAPI.
  };

  return (
    <div className='search-form'>
      <form
        action='#'
        onSubmit={handleOnSubmit}
      >
        <div className='row g-2'>
          <div className='col-md-9'>
            <input
              type='text'
              className='form-control'
              placeholder='Type your movie name'
              aria-label='movie'
              onChange={handleOnChange}
              required
            />
          </div>
          <div className='col-md-3 d-grid'>
            <button
              type='submit'
              className='btn btn-warning'
            >
              Search
            </button>
          </div>
        </div>
      </form>
      <div className='d-flex justify-content-center'>
        {movie.imdbID && (
          <CustomCard
            {...movie}
            handleOnAddbtn={handleOnAddbtn}
            handleOnDelete={handleOnDelete}
          />
        )}
        {IsError && <div className='alert alert-danger'>No Movies found!</div>}
      </div>
    </div>
  );
};
