import React from "react";

export const Contact = () => {
  return (
    <div>
      {" "}
      <section
        className='section6 flex'
        id='contact'
      >
        <h2 className='title'>Get In Touch</h2>
        <div className='socials flex'>
          <i className='fa-brands fa-linkedin'></i>
          <i className='fa-brands fa-square-github'></i>
          <i className='fa-brands fa-square-twitter'></i>
          <i className='fa-brands fa-youtube'></i>
        </div>
        <h3 className='title'>OR</h3>
        <div className='email-section flex'>
          <div className='email flex'>
            <a href='mailto:nirajlimbu7@gmail.com'>example@gmail.com</a>
            <div className='send'>
              <i className='fa-solid fa-paper-plane'></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
