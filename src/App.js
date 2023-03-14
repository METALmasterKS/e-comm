import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Catalog from "./components/Catalog";
import NotFound from "./components/NotFound";

import "./css/style.css"
import "bootstrap/dist/css/bootstrap.css"

function App() {
  return (
    <BrowserRouter>

      <Layout>
        <Routes>
          <Route exact path="/"/>
          <Route path="/catalog.html" element={<Catalog/>}/>
          <Route path="/about.html" element={<About/>}/>
          <Route path="/contacts.html" element={<Contacts/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>

    </BrowserRouter>
  );
}

export default App;
