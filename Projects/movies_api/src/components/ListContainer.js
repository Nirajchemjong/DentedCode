import React, { useEffect, useState } from "react";
import { CustomCard } from "./CustomCard";

export const ListContainer = ({ movieList, handleOnDelete }) => {
  // const [display, setDisplay] = useState(new Array(5).fill(""));

  const [display, setDisplay] = useState([]);

  useEffect(() => {
    setDisplay(movieList);
  }, [movieList]);

  // const borArg = movieList.filter((item) => item.type === "boring");
  // console.log(borArg);

  // const awesArg = movieList.filter((item) => item.type === "awesome");
  // console.log(awesArg);
  const handleOnListbtnClicked = (type) => {
    if (type === "all") {
      return setDisplay(movieList);
    }
    const filteredArg = movieList.filter((item) => item.type === type);
    setDisplay(filteredArg);
  };

  return (
    <div className='list mt-4'>
      <div
        className='btn-group ms-4 mt-4'
        role='group'
        aria-label='Basic mixed styles example'
      >
        <button
          type='button'
          className='btn btn-primary'
          onClick={() => handleOnListbtnClicked("all")}
        >
          All
        </button>
        <button
          type='button'
          className='btn btn-warning'
          onClick={() => handleOnListbtnClicked("awesome")}
        >
          Awesome
        </button>
        <button
          type='button'
          className='btn btn-danger'
          onClick={() => handleOnListbtnClicked("boring")} // use arrow function only if you want to pass arguments else no need to do anything; just calling is okay
        >
          Boring
        </button>
      </div>
      <div className='mt-3'>{movieList.length} movies found</div>
      <div className='d-flex flex-wrap justify-content-center py-3 gap-3'>
        {/* <img
          src='...'
          alt='Images loads here'
          srcset=''
        /> */}

        {display.map((item) => (
          <CustomCard
            {...item}
            handleOnDelete={handleOnDelete}
          />
        ))}
      </div>

      <div className='footer text-center mt-4'>@copyRight</div>
    </div>
  );
};
