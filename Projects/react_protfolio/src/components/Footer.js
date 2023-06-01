import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div>
      {" "}
      <footer>
        <div className='footer-container flex'>
          <div className='links flex'>
            <h3>Links</h3>
            <ul className='flex'>
              <li>
                <Link to='/home'>Home</Link>
              </li>
              <li>
                <Link to='/projects'>Projects</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/skills'>Skills</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
          </div>
          <div className='socials flex'>
            <h3>Socials</h3>
            <ul className='flex'>
              <li>
                <a href='/!'>LinkedIN</a>
              </li>
              <li>
                <a href='/!'>GitHub</a>
              </li>
              <li>
                <a href='/!'>YouTube</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='footer-bottom'>&copy; All right reserved.</div>
      </footer>
    </div>
  );
};
