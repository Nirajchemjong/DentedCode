import React from "react";

export const Header = () => {
  return (
    <div>
      <label for='darkMode'>
        <i className='fa-solid fa-circle-half-stroke dark-mode-toggle'></i>
      </label>
      {/* <!-- header  --> */}
      <header className='flex primary-header'>
        <div className=' flex logo'>
          <div>
            <h1>Niraj Chemjong</h1>
          </div>
          <div>
            <h1 className='line'>Web Developer</h1>
          </div>
        </div>
        <div className='right'>
          <input
            type='checkbox'
            id='check'
          />
          <label
            for='check'
            className='menu-icon'
          >
            <i className='fa-solid fa-bars'></i>
          </label>

          <ul className='navigation flex'>
            <li>
              <a href='#home'>Home</a>
            </li>
            <li>
              <a href='#skills'>Skils</a>
            </li>
            <li>
              <a href='#projects'>Projects</a>
            </li>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};
