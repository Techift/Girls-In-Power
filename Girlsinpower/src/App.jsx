import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import { useState } from "react";
import "./App.css";
import Hero from "./Hero";
import Header from "./Header";
import About from "./pages/About";
import Programs from "./Programs";
import Impact from "./Impact";
import Get from "./pages/Initiatives";
import Events from "./Events";
import Blog from "./Blog";
import Contact from "./pages/Contact";
import Footer from "./Footer";
import Home from "./pages/Home";
import Initiatives from "./pages/Initiatives";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
