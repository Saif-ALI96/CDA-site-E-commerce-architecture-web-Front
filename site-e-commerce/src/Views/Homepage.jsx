import React, { useState, useEffect } from "react";
import Navigationbar from "../Components/NavigationBar";
import CardProduit from "../Components/CardProduit";
import ProduitsController from "../Controllers/ProduitsController";
import Product from "../Models/Product";

const Homepage = () => {
  const [produits, setProduits] = useState([]);

  const fetchProduit = async () => {
    try {
      let response = await ProduitsController.getAllProduits();
      // Convertissez les données reçues en instances de votre modèle de produit
      const produitsData = response.data.map((prod) => new Product(prod.id, prod.title, prod.description, prod.image));
      setProduits(produitsData);
      console.log(produitsData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduit();
  }, []);

  return (
    <>
      <Navigationbar />
      <CardProduit produits={produits} />
    </>
  );
};

export default Homepage;
