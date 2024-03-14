import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Views/Homepage";
import Panier from "./Views/Panier";
import Produits from "./Views/Produits";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Homepage />} path="/" />
          <Route element={<Panier />} path="/panier" />
          <Route element={<Produits />} path="/Produits"></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
