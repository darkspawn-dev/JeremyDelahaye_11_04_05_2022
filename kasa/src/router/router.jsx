import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import About from "../pages/About";
import { Route, Routes } from "react-router-dom";
import React from "react";
import House from "../pages/House";
const routesPath = (
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="house/:id" element={<House />} />
        <Route path="*" element={<Error404 />} />
    </Routes>
);

export default routesPath