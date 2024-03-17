import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import PutProduitController from '../Controllers/PutProduitController';

const ModalPutProduit = ({ show, handleClose, productId }) => {
  const [titre, setTitre] = useState("");
  const [image, setImage] = useState("");
  const [prix, setPrix] = useState("");
  const [description, setDescription] = useState("");

  const putProduct = async () => {
    try {
      const updatedProductData = {
        titre: titre,
        image: image,
        prix: prix,
        description: description
      };

      await PutProduitController(productId, updatedProductData);
      handleClose();
      window.location.reload();
    } catch (error) {
      console.log("Erreur lors de la modification du produit", error);
    }
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modifier le produit</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasicTitre">
          <Form.Label>Nouveau titre</Form.Label>
          <Form.Control onChange={(e) => setTitre(e.target.value)} type="text" placeholder="Nouveau titre" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicImage">
          <Form.Label>Nouvelle Image</Form.Label>
          <Form.Control onChange={(e) => setImage(e.target.value)} type="text" placeholder="Nouvelle Image" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPrix">
          <Form.Label>Nouveau Prix</Form.Label>
          <Form.Control onChange={(e) => setPrix(e.target.value)} type="text" placeholder="Nouveau Prix" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Nouvelle Description</Form.Label>
          <Form.Control onChange={(e) => setDescription(e.target.value)} as="textarea" rows={5} placeholder="Nouvelle Description" />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Annuler
        </Button>
        <Button variant="primary" onClick={putProduct}>
          Modifier
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalPutProduit;
