import { Route, Routes } from "react-router-dom";
import "./App.css";
// import "./style.css";

//importing images

import { About } from "./components/About";

import { Banner } from "./components/Banner";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProjectsInfo } from "./components/ProjectsInfo";
import { Skills } from "./components/Skills";
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
        {/* header section  */}
        {/* <Header /> */}
        <Routes>
          <Route
            path='/'
            element={<Hero />}
          />
          <Route
            path='skills'
            element={<Skills />}
          />
          <Route
            path='projects'
            element={<ProjectsInfo />}
          />
          <Route
            path='about'
            element={<About />}
          />
          <Route
            path='banner'
            element={<Banner />}
          />
          <Route
            path='contact'
            element={<Contact />}
          />
        </Routes>

        {/* <!-- Hero  --> */}
        {/* <Hero /> */}
        {/* <!-- banner  --> */}
        {/* <Banner /> */}
        {/* <!-- Skills section  --> */}
        {/* <Skills /> */}
        {/* <!-- Projects  --> */}
        {/* <ProjectsInfo /> */}
        {/* <!-- about  --> */}
        {/* <About /> */}
        {/* <!-- //Get In Touch  --> */}
        {/* <Contact /> */}
        {/* <!-- footer  --> */}
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;

// working with react route dom

// 1. npm i react-router-dom
// 2. wrap entire components with BrowserRouter in indexedDB.js or App.js
// 3. use Routes components to wrap all the pagess.
// 4. difine individual page by using Route component
