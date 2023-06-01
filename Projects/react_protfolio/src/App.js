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
        {/* <!-- Hero  --> */}
        <Hero />
        {/* <!-- banner  --> */}
        <Banner />
        {/* <!-- Skills section  --> */}
        <Skills />
        {/* <!-- Projects  --> */}
        <ProjectsInfo />
        {/* <!-- about  --> */}
        <About />
        {/* <!-- //Get In Touch  --> */}
        <Contact />
        {/* <!-- footer  --> */}
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
