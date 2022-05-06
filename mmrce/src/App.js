import React from "react";
import "./normalize.css";
import "./App.css";
//listing Components
import Navbar from "./components/Navbar/Navbar";
import Vpm from "./components/Video/Mobile/Video-mobile";
import ContentTitle from "./components/mobile_text/ContentTitle";
import ContentDesc from "./components/mobile_text/ContentDesc";
import MobImage from "./components/Containers/Mobile/mobile-image";
import notepad from "./components/Containers/Mobile/notepad.jpg";
//end of Components

const App = () => {
  return (
    <div>
      <Navbar />
      <Vpm />
      <ContentTitle learning="Learning Done Easy 💯" />
      <ContentDesc learning="Simplify your learning without the hassle. Become your own learning guru" />

      <MobImage source={notepad}></MobImage>
      <ContentTitle learning="Introducing Zap Mode ⚡️" />
      <ContentDesc learning="With the speed of lightning we can review what is starred to achieve great things within a small amount of time" />
    </div>
  );
};

export default App;
