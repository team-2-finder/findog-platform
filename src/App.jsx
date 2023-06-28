import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main, Research } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/research" element={<Research />} />
    </Routes>
  );
};

export default App;
