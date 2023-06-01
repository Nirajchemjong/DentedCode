import React from "react";

export const Banner = () => {
  return (
    <div>
      <section className='section2'>
        <div className='info-container flex'>
          <div className='info-lists flex'>
            <div className='info-content flex'>
              <div className='icon-container flex'>
                <i className='fa-solid fa-award'></i>
              </div>
              <span>
                <h5>IT</h5>
                <p>Graduate</p>
              </span>
            </div>

            <div className='info-divider'></div>

            {/* <!-- //projects Complete  --> */}

            <div className='info-content flex'>
              <div className='icon-container flex'>
                <i className='fa-solid fa-award'></i>
              </div>
              <span>
                <h5>5 + Projects</h5>
                <p>Completed</p>
              </span>
            </div>
            <div className='info-divider'></div>

            {/* <!-- Year Experiences --> */}

            <div className='info-content flex'>
              <div className='icon-container flex'>
                <i className='fa-solid fa-award'></i>
              </div>
              <span>
                <h5>1 + Year</h5>
                <p>Experiences</p>
              </span>
            </div>
            <div className='info-divider'></div>
          </div>
        </div>
      </section>
    </div>
  );
};
