import React from "react";
import "./normalize.css";
import "./App.css";
//listing Components
import Navbar from "./components/Navbar/Navbar";
import Vpm from "./components/Video/Mobile/Video-mobile";
import ContentTitle from "./components/mobile_text/ContentTitle";
//end of Components

const App = () => {
  return (
    <div>
      <Navbar />
      <Vpm />
      <ContentTitle learning="Learning Done Easy 💯" />
    </div>
  );
};

export default App;
