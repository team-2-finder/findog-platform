import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main, Research, Intro, MIntro } from "./pages";

const isMobile = window.innerWidth <= 393;

const App = () => {
  return (
    <Routes>
      {isMobile ? (
        <Route path="/" element={<MIntro />} />
      ) : (
        <Route path="/" element={<Intro />} />
      )}
      <Route path="/inputImage" element={<Main />} />
      <Route path="/research" element={<Research />} />
    </Routes>
  );
};

export default App;
