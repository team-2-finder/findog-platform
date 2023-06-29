import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main, Research, Similarity } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/research" element={<Research />} />
      <Route path="/similarity" element={<Similarity />} />
    </Routes>
  );
};

export default App;
