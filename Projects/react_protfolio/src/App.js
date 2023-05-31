// import "./App.css";
import "./style.css";

//importing images

import subject from "./assets/Subject.png";
import Resume from "./assets/Pariwesh.Resume.pdf";
import ec from "./assets/imgs/ec.png";
function App() {
  return (
    <div className='App'>
      {/* <!-- dark mode button  --> */}
      <input
        type='checkbox'
        id='darkMode'
        className='dark-mode-checkbox'
      />
      <div className='wrapper'>
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

        {/* <!-- Hero  --> */}
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

        {/* <!-- banner  --> */}

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

        {/* <!-- Skills section  --> */}
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

        {/* <!-- Projects  --> */}
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

        {/* <!-- about  --> */}
        <section
          className='section5 flex'
          id='about'
        >
          <h1 className='title'>About me</h1>
          <div className='about-container flex'>
            <div className='left'>
              <img
                src={subject}
                alt=''
                srcset=''
              />
            </div>
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

        {/* <!-- //Get In Touch  --> */}

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

        {/* <!-- footer  --> */}

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
    </div>
  );
}

export default App;
