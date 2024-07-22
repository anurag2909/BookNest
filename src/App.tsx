import React from "react";
import "./App.css";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";
import { Footer } from "./layouts/NavbarAndFooter/Footer";
import { HomePage } from "./layouts/HomePage/HomePage";
import { SearchBooksPage } from "./layouts/SearchBooksPage/SearchBooksPage";
import { Redirect, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/home">
        <HomePage />
      </Route>
      <Route path="/search">
        <SearchBooksPage />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
