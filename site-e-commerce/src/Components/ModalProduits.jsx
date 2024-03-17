import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import deleteProduct from "../Controllers/DeleteProductController";

const ModalProduits = ({ show, onHide, produit }) => {

  const handleDelete = () => {
    deleteProduct(produit.id, onHide);
  };

  return (
    <Modal size="lg" show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{produit.titre}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={produit.image} alt={produit.titre} style={{ width: "100%" }} />
        <p>{produit.prix} €</p>
        <p>{produit.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success">Modifier</Button>
        <Button onClick={handleDelete} variant="danger">Supprimer</Button>
        <Button onClick={onHide}>Annuler</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalProduits;
