import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import { Navigate, Route, Routes } from "react-router-dom";
import { linksApi } from "../Api/links/linksApi";
import { ToastContainer } from "react-toastify";
// components
import Header from "./Header";
import Navigation from "./Navigation";
// pages
import TestimonialPage from "../pages/TestimonialPage";
import ConfiguratorPage from "../pages/ConfiguratorPage";
// styles
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../scss/index.scss";
import { toastComponent } from "./Toast";

function App() {
  const [links, setLinks] = useState([]);

  /* Since I will have same navigation links on all pages ,I decided to get them directly  
  also I have used page-1 as home page since in my task there was no homepage design*/
  useEffect(() => {
    async function getLinks() {
      try {
        const links = await linksApi.getLinks();
        setLinks(links.menu.items);
      } catch (error) {
        toastComponent(error.message);
      }
    }
    getLinks();
  }, []);

  return (
    <div className="app">
      <Header>
        <ToastContainer />
        <Navigation links={links} />
      </Header>
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
