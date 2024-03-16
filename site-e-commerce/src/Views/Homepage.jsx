import React from "react";
import Navigationbar from "../Components/NavigationBar";
import CardProduit from "../Components/CardProduit";
import { useProduits } from "../Controllers/GetProductController";

const Homepage = () => {
  const produits = useProduits();


  return (
    <>
      <Navigationbar />
      <CardProduit produits={produits} />
    </>
  );
};

export default Homepage;
