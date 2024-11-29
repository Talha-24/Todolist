import React, { useState } from "react";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
 //

import App from "./App";//Import means received
import { BrowserRouter } from "react-router-dom";
// import "./style.css";

let root=createRoot(document.querySelector("#root"));
root.render(
  <BrowserRouter>
   <App/>
   </BrowserRouter>
  
 
 
   )