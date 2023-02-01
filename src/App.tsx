import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./component/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Nofound from "./pages/Notfound";

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Nofound />} />
      </Routes>
    </Router>
  );
}
