import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {Route ,Router,Routes} from "react-router-dom";
import Navba from "./components/Navbar";

import Getstart from "./components/Getstart";
import Branch from "./components/Branch";

function App() {
  return (
   <>
 
  
    <Navba />
   
    {/* <Getstart /> */}
   </>
  );
}

export default App;
