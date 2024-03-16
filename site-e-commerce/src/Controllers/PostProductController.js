import ProductService from "../Services/ProductService";

const postProductController = (data) => {
    try {
        ProductService.postProduit(data);
    } catch (error) {
        console.log("erreur lors du chargement des produits");
    }
    
      }

export { postProductController };
