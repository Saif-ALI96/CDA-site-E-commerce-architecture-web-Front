import React from "react";
import Navigationbar from "../Components/NavigationBar";
import CardProduit from "../Components/CardProduit";
import Produits from "./Produits";

const Homepage = () => {
  return (
    <>
      <Navigationbar />
      <CardProduit />
    </>
  );
};

export default Homepage;
