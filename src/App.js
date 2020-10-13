import React from "react";
import NameJson from "./Component/NameJson/NameJson";
import Navbar from "./Component/Navbar/Navbar";
import Skills from "./Component/Skills/Skills";
const App = () => {
  return (
    <div>
      <Navbar />
      <NameJson />
      <Skills />
      {/* <li> JS is Fun</li> */}
    </div>
  );
};
export default App;
