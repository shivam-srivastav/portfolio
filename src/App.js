import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Education from "./Component/Education/Education";
import Fun from "./Component/Fun/Fun";
import NameJson from "./Component/NameJson/NameJson";
import Navbar from "./Component/Navbar/Navbar";
import Project from "./Component/Projects/Project";
import Skills from "./Component/Skills/Skills";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <NameJson id="001" />
        <Skills id="002" />
        <Fun id="003" />
        <Project id="004" />
        <Education id="005" />
      </Router>
    </div>
  );
};
export default App;
