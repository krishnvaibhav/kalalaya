import React from "react";
import Navbar from "./components/Navbar";
import { Box } from "@mui/material";
import Footer from "./components/Footer";
import { Routes, Route, Router } from "react-router-dom";
import Home from "./components/home";
const App = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<Home />} path="/aboutus"></Route>
        <Route element={<Home />} path="/events"></Route>
        <Route element={<Home />} path="/galary"></Route>
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
