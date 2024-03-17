import ProductService from "../Services/ProductService";

const deleteProduct = async (produit_id, onHide) => {
    try {
        await ProductService.deleteProduit(produit_id);
        onHide();
        window.location.reload();
    } catch (error) {
        console.log("Erreur lors de la suppression du produit");
    }
}

export default deleteProduct;
