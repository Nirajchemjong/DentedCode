import React from "react";
import ec from "../assets/imgs/ec.png";
import { Layout } from "./Layout";

export const ProjectsInfo = () => {
  return (
    <Layout>
      <section
        className='section4 flex'
        id='projects'
      >
        <h2 className='title'>My Recent Projects</h2>
        <div className='projects-container grid'>
          <div className='project-card flex'>
            <div className='top'>
              <img
                src={ec}
                alt='ecommerce'
                srcset=''
              />
            </div>
            <div className='bottom'>
              <p>Full-stack Web App built with React & Firebase</p>
              <p>Dec 15 2022</p>
            </div>
          </div>
          <div className='project-card flex'>
            <div className='top'>
              <img
                src={ec}
                alt='ecommerce'
                srcset=''
              />
            </div>
            <div className='bottom'>
              <p>Full-stack Web App built with React & Firebase</p>
              <p>Dec 15 2022</p>
            </div>
          </div>
          <div className='project-card flex'>
            <div className='top'>
              <img
                src={ec}
                alt='ecommerce'
                srcset=''
              />
            </div>
            <div className='bottom'>
              <p>Full-stack Web App built with React & Firebase</p>
              <p>Dec 15 2022</p>
            </div>
          </div>
          <div className='project-card flex'>
            <div className='top'>
              <img
                src={ec}
                alt='ecommerce'
                srcset=''
              />
            </div>
            <div className='bottom'>
              <p>Full-stack Web App built with React & Firebase</p>
              <p>Dec 15 2022</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
