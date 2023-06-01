import React from "react";

export const About = () => {
  return (
    <section
      className='section5 flex'
      id='about'
    >
      <h1 className='title'>About me</h1>
      <div className='about-container flex'>
        <div className='left'></div>
        <div className='right flex'>
          <h2>Niraj Chemjong</h2>
          <p>
            Recently Graduated from Victorian Institute Of Techonology And
            Systems.
          </p>
          <p>Canberra, Australia</p>
          {/* <!-- <a href="#">Connect With me</a> --> */}
          <div className='flex'>
            <div className='tag'>Interests</div>
            <div>
              <span>coding</span>
              <span>Football</span>
              <span>Movies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
