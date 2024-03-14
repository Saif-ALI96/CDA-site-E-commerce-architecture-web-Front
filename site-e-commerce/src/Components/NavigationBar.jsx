import React, {useState} from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaBasketShopping } from "react-icons/fa6";
import { IoIosAddCircleOutline } from "react-icons/io";
import AjouterModal from "./AjouterModal";

const Navigationbar = () => {

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Idée de nom ?</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Accueil</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link onClick={handleShowModal}>
              <IoIosAddCircleOutline size={40} />
            </Nav.Link>
            <Nav.Link href="#panier">
              <FaBasketShopping size={40} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <AjouterModal show={showModal} handleClose={() => setShowModal(false)} />
    </Navbar>
  );
};

export default Navigationbar;
