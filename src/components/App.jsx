import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ConfiguratorPage from "../pages/ConfiguratorPage";
import TestimonialPage from "../pages/TestimonialPage";
import Header from "./Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="page-1" />} />
        <Route path="/page-1" element={<TestimonialPage />} />
        <Route path="/page-2" element={<ConfiguratorPage />} />
      </Routes>
    </div>
  );
}
export default App;
