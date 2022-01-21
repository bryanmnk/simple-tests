import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import { Navigate, Route, Routes } from "react-router-dom";
import ConfiguratorPage from "../pages/ConfiguratorPage";
import TestimonialPage from "../pages/TestimonialPage";
import Header from "./Header";
// styles
import "../scss/index.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Navigate replace to="page-1" />} />
            <Route path="/page-1" element={<TestimonialPage />} />
            <Route path="/page-2" element={<ConfiguratorPage />} />
          </Routes>
        </Provider>
      </div>
    </div>
  );
}
export default App;
