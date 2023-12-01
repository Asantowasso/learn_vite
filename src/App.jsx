import { useState } from "react";
import Sidenav from "./components/Sidenav";
import Main  from "./components/Main";
import Work from './components/Work';
import Projects from './components/Projects';
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <Work />
      <Projects />
      <About />
      <Contact/>
    </div>
  );
}

export default App;
