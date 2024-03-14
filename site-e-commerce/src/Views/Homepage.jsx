import React, {useState, useEffect} from "react";
import Navigationbar from "../Components/NavigationBar";
import CardProduit from "../Components/CardProduit";
import ProduitsController from "../Controllers/ProduitsController";

const Homepage = () => {

  const [produits, setProduits] = useState([]);

  const fetchProduit = async () => {
    try {
      let response = await ProduitsController.getAllProduits();
      setProduits(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProduit();
}, []);

  return (
    <>
      <Navigationbar />
      <CardProduit produits ={produits} />
    </>
  );
};

export default Homepage;
