import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import JOb from "./page/JOb";
import ContactUs from "./page/ContactUs";
import Services from "./page/Services";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/jobs" element={<JOb />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
};

export default AppRoutes;
