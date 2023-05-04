import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../src/container/Home.jsx";
import Signup from "./components/SignUp.jsx";
import Profile from "./container/Profile.jsx";
import Write from "./container/Write.jsx";

const App = () => (
  <Routes>
    <Route path="/signup" element={<Signup />} />
    <Route path="/" element={<Home />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/write" element={<Write />} />
  </Routes>
);

export default App
