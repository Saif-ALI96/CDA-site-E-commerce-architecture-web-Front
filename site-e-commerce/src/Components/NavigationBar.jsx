// Navigationbar.jsx
import React, { useState } from "react";
import { FaBasketShopping } from "react-icons/fa6";
import { IoIosAddCircleOutline } from "react-icons/io";
import AjouterModal from "./AjouterModal";
import { Navbar, Container, Nav } from "react-bootstrap";

const Navigationbar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (<>
    <Navbar expand="lg" style={{backgroundColor: '#c7c7c7'}}>
      <Container>
        <Navbar.Brand href="#home">GlisseProShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{fontWeight: '700', fontSize: 'large', marginLeft: '60px'}} href="/">Accueil</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link onClick={handleShowModal}>
              <IoIosAddCircleOutline size={40} />
            </Nav.Link>
            <Nav.Link href="/panier">
              <FaBasketShopping size={40} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar><AjouterModal show={showModal} handleClose={() => setShowModal(false)} />
    </>
  );
};

export default Navigationbar;
