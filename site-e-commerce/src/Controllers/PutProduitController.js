import ProductService from "../Services/ProductService";

 const PutProduitController = async (id_produit, data) => {
    try {
        ProductService.putProduit(id_produit, data);
    } catch (error) {
        console.log("erreur lors du chargement des produits");
    }
 }

 export default PutProduitController;