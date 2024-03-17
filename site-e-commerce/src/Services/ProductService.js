import axios from "axios";

function getAllProduits() {
  return axios.get("http://localhost:8080/produit");
}

function postProduit(newProduct){
  return axios.post("http://localhost:8080/produit", newProduct)
}

function deleteProduit(id_produit){
  return axios.delete("http://localhost:8080/produit/"+ id_produit);
}

export default {
  getAllProduits,
  postProduit,
  deleteProduit
};
