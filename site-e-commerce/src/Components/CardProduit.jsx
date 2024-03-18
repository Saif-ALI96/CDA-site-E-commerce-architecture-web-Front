import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import de Link depuis react-router-dom
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import ModalProduits from "./ModalProduits";

const MAX_DESCRIPTION_LENGTH = 100;
const CardProduit = ({ produits }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleShowModal = (produit) => {
    setShowModal(true);
    setSelectedProduct(produit);
  };

  return (
    <>
      <div style={styles.container}>
        {produits.map((produit, index) => (
          <Card key={index} style={styles.card}>
            <Image src={produit.image} fluid />
            <Card.Body style={styles.cardText}>
              <Card.Title>{produit.titre}</Card.Title>
              <Card.Text>
                {truncateText(produit.description, MAX_DESCRIPTION_LENGTH)}
              </Card.Text>
              <Card.Text>{produit.prix} €</Card.Text>
              <div className="text-center">
                <Button
                  onClick={() => handleShowModal(produit)}
                  style={styles.button}
                >
                  Voir plus
                </Button>
              </div>
              <div className="text-center">
                <Link to={"/panier"} state={{ product: produit } }>
                  <Button variant="success" style={styles.button}>
                    Ajouter au panier
                  </Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
      {selectedProduct && (
        <ModalProduits
          show={showModal}
          onHide={() => setShowModal(false)}
          produit={selectedProduct}
        />
      )}
    </>
  );
};

const truncateText = (text, maxLength) => {
  if (!text) return '';

  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
};


const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    margin: "0 50px",
    gap: "20px",
    paddingTop: "50px",
  },
  card: {
    width: "18rem",
    margin: "20px",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  },
  cardText: {
    fontSize: "16px",
    color: "#333",
  },
  button: {
    marginTop: "30px",
    marginBottom: "20px",
    flex: "1",
  },
};

export default CardProduit;
