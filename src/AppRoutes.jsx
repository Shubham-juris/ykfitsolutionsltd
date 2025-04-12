import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import JOb from "./page/JOb";
import ContactUs from "./page/ContactUs";
import Services from "./page/Services";
import SoftwareDeveloper from "./component/SoftwareDeveloper";
import WebsiteDeveloper from "./component/WebsiteDeveloper";
import DataAnalyst from "./component/DataAnalyst";
import DigitalMarketingC from "./component/DigitalMarketingC";
import Contentcreator from "./component/Contentcreator";
import Bookkeeper from "./component/Bookkeeper";
import BusinessDevelopment from "./component/BusinessDevelopment";
import SystemsEngineer from "./component/SystemsEngineer";
import MarketingCoordinator from "./component/MarketingCoordinator";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/jobs" element={<JOb />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/software-developer" element={<SoftwareDeveloper />} />
      <Route path="/website-developer" element={<WebsiteDeveloper />} />
      <Route path="/data-analist" element={<DataAnalyst />} />
      <Route path="/digital-marketig" element={<DigitalMarketingC />} />
      <Route path="/contente-creator" element={<Contentcreator />} />
      <Route path="/bookkeeper" element={<Bookkeeper />} />
      <Route path="/business-development" element={<BusinessDevelopment />} />
      <Route path="/systems-engineer" element={<SystemsEngineer />} />
      <Route path="/marketing-coordinator" element={<MarketingCoordinator />} />
    </Routes>
  );
};

export default AppRoutes;
// website-developer
