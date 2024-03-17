import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import deleteProduct from "../Controllers/DeleteProductController";
import deleteProductController from "../Controllers/DeleteProductController";
import ModalPutProduit from "./ModalPutProduit";

const ModalProduits = ({ show, onHide, produit }) => {

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleDelete = () => {
    deleteProductController(produit.id, onHide);
  };
  
  return (<>
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
        <Button onClick={handleShowModal} variant="success">Modifier</Button>
        <Button onClick={handleDelete} variant="danger">Supprimer</Button>
        <Button onClick={onHide}>Annuler</Button>
      </Modal.Footer>
    </Modal>
        <ModalPutProduit productId={produit.id} show={showModal} handleClose={() => setShowModal(false)} />
        </>
  );
};

export default ModalProduits;
