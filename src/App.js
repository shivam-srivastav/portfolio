import React from "react";
import Fun from "./Component/Fun/Fun";
import NameJson from "./Component/NameJson/NameJson";
import Navbar from "./Component/Navbar/Navbar";
import Project from "./Component/Projects/Project";
import Skills from "./Component/Skills/Skills";
const App = () => {
  return (
    <div>
      <Navbar />
      <NameJson />
      <Skills />
      <Fun />
      <Project />
    </div>
  );
};
export default App;
