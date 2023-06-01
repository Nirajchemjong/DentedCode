import React from "react";
import { Layout } from "./Layout";

export const Skills = () => {
  return (
    <Layout>
      <section
        className='section3'
        id='skills'
      >
        <div className='skills-container flex'>
          <div className='flex'>
            <i className='fa-brands fa-html5'></i>
            <span>HTML</span>
          </div>
          <div className='flex'>
            <i className='fa-brands fa-css3'></i>
            <span>CSS</span>
          </div>
          <div className='flex'>
            <i className='fa-brands fa-square-js'></i>
            <span>JavaScript</span>
          </div>
          <div className='flex'>
            <i className='fa-brands fa-react'></i>
            <span>React</span>
          </div>
          <div className='flex'>
            <i className='fa-regular fa-folder-open'></i>
            <span>Firebase</span>
          </div>
        </div>
      </section>
    </Layout>
  );
};
