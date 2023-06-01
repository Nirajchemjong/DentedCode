import React from "react";
import { Link } from "react-router-dom";

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
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/skills'>Skils</Link>
            </li>
            <li>
              <Link to='/projects'>Projects</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};
