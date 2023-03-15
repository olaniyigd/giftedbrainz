import React from "react";
import "./App.css";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from  './Component/Signin';
import Signup from "./Component/Signup";

const App = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route index element={< Home/>} />
      <Route path="/signin" element={< Signin/>} />
      <Route path="/signup" element={< Signup/>} />
      {/* <Route index element={< Home/>} />
      <Route index element={< Home/>} />
      <Route index element={< Home/>} /> */}

    </Routes>
  </BrowserRouter>
  )
}

export default App;