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
import MobButton from "./components/Buttons/Mobile/MobButton";
//end of Components

//temp solution start
import MobNav from "./components/Navbar/Mob-nav/MobNav";
//temp solution end

//vanilla bootstrap start

//vanilla boostrap end

//React Bootstrap start
//React Bootstrap will be postponed for now, currently using vanilla bootstrap
//React Boostrap end

const App = () => {
  //for debugging purposes for click
  let hbMenu = null;
  return (
    <div className="app-wrapper">
      <Navbar />
      <Vpm />
      <ContentTitle learning="Learning Done Easy 💯" />
      <ContentDesc learning="Simplify your learning without the hassle. Become your own learning guru" />
      <MobButton value="Start Now" />
      <MobImage source={notepad}></MobImage>
      <ContentTitle learning="Introducing Zap Mode ⚡️" />
      <ContentDesc learning="With the speed of lightning we can review what is starred to achieve great things within a small amount of time" />
      <MobButton value="Try Now" />
      {/*need a footer*/}
    </div>
  );
};

export default App;
