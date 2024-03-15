import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const AjouterModal = ({ show, handleClose }) => {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un Modele</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            {/* <Form.Label>Password</Form.Label> */}
            <Form.Control type="text" placeholder="Title" />
          </Form.Group>
        </Modal.Body>
        <Modal.Body>
          {" "}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            {/* <Form.Label>Password</Form.Label> */}
            <Form.Control type="text" placeholder="Image" />
          </Form.Group>
        </Modal.Body>
        <Modal.Body>
          {" "}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            {/* <Form.Label>Password</Form.Label> */}
            <Form.Control type="text" placeholder="Prix" />
          </Form.Group>
        </Modal.Body>
        <Modal.Body>
          {" "}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            {/* <Form.Label>Password</Form.Label> */}
            <Form.Control as="textarea" rows={5} placeholder="Description" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AjouterModal;
