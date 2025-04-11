import React from "react";
import "./App.css";
import Navbar from "./component/Common/Navbar";
import Footer from "./component/Common/Footer";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
