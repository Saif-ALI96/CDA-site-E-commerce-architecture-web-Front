import axios from "axios";

function getAllProduits() {
  return axios.get("http://localhost:8080/produit");
}

function postProduit(newProduct){
  return axios.post("http://localhost:8080/produit", newProduct)
}

export default {
  getAllProduits,
  postProduit
};
