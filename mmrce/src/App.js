import React from "react";
import "./normalize.css";
import "./App.css";
//listing Components
import Navbar from "./components/Navbar/Navbar";
import Vpm from "./components/Video/Mobile/Video-mobile";
//end of Components

const App = () => {
  return (
    <div>
      <Navbar />
      <Vpm />
    </div>
  );
};

export default App;
