import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { postProductController } from "../Controllers/PostProductController";

const AjouterModal = ({ show, handleClose }) => {

  const [titre, setTitre] = useState("");
  const [image, setImage] = useState("");
  const [prix, setPrix] = useState("");
  const [description, setDescription] = useState("");

  const addProduct = async () => {

    try {
          const newProduct = {
      titre: titre,
      image: image,
      prix: prix,
      description: description
    };

    await postProductController(newProduct);
    handleClose();
      window.location.reload();
    } catch (error) {
      console.log("Erreur lors de l'ajout du produit")
    }

  }

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un Modèle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control onChange={(e) => setTitre(e.target.value)} type="text" placeholder="Title" />
          </Form.Group>
        </Modal.Body>
        <Modal.Body>
          {" "}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control onChange={(e) => setImage(e.target.value)} type="text" placeholder="Image" />
          </Form.Group>
        </Modal.Body>
        <Modal.Body>
          {" "}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control onChange={(e) => setPrix(e.target.value)} type="text" placeholder="Prix" />
          </Form.Group>
        </Modal.Body>
        <Modal.Body>
          {" "}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control onChange={(e) => setDescription(e.target.value)} as="textarea" rows={5} placeholder="Description" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Annuler
          </Button>
          <Button variant="primary" onClick={addProduct}>
            Créer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AjouterModal;
