import React from "react";
import subject from "../assets/Subject.png";
import Resume from "../assets/Pariwesh.Resume.pdf";

export const Hero = () => {
  return (
    <div>
      {" "}
      <section
        className='section1 grid'
        id='home'
      >
        <div className='left'>
          <img
            src={subject}
            alt='profile pic'
            srcset=''
          />
        </div>
        <div className='right flex'>
          <div className='flex'>
            <div className='name'>Niraj Chemjong</div>
            <div className='tag'>Soft. Engineer</div>
          </div>
          <button>
            <a
              href={Resume}
              download
            >
              Download CV <i className='fa-solid fa-download'></i>
            </a>
          </button>
        </div>
      </section>
    </div>
  );
};
