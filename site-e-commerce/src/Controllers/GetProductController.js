import { useState, useEffect } from "react";
import Product from "../Models/Product";
import ProductService from "../Services/ProductService";

function useProduits() {
  const [produits, setProduits] = useState([]);

  const getProductsController = async () => {
    try {
        let response = await ProductService.getAllProduits();
        const produitsData = response.data.map((prod) => new Product(prod.id, prod.titre, prod.description, prod.image, prod.prix));
        setProduits(produitsData);
        console.log(produitsData);
    } catch (error) {
        console.log("erreur lors du chargement des produits");
    }
  }

  useEffect(() => {
    getProductsController();
  }, []);

  return produits;
}

export { useProduits };
