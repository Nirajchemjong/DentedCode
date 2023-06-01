import React from "react";

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
                <a href='#home'>Home</a>
              </li>
              <li>
                <a href='#projects'>Projects</a>
              </li>
              <li>
                <a href='#about'>About</a>
              </li>
              <li>
                <a href='#skills'>Skills</a>
              </li>
              <li>
                <a href='#contact'>Contact</a>
              </li>
            </ul>
          </div>
          <div className='socials flex'>
            <h3>Socials</h3>
            <ul className='flex'>
              <li>
                <a href='#!'>LinkedIN</a>
              </li>
              <li>
                <a href='#!'>GitHub</a>
              </li>
              <li>
                <a href='#!'>YouTube</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='footer-bottom'>&copy; All right reserved.</div>
      </footer>
    </div>
  );
};
