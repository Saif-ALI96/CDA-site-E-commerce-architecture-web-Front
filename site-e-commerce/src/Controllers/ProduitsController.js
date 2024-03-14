import axios from 'axios';

function getAllProduits(){
    return axios.get('http://localhost:8080/produit')
}

export default{
    getAllProduits,
}