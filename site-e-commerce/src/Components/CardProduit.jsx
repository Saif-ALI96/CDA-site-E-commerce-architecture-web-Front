import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";

const CardProduit = ({produits}) => {

  console.log(produits);

  return (
    <div style={styles.container}>
      {produits.map((produit) => (
         <Card style={styles.card}>
        <Image src={produit.image} fluid />
        {/* <Card.Img variant="top" src="../../public/image1.png" /> */}
        <Card.Body style={styles.cardText}>
          <Card.Title>{produit.titre}</Card.Title>
          <Card.Text>
            {produit.description}
          </Card.Text>
          <Button style={styles.button}>Go somewhere</Button>
        </Card.Body>
      </Card>
      ))}
     </div>
  );
};
      // {/* <Card style={styles.card}>
      //   <Image src={image2} fluid />
      //   {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      //   <Card.Body style={styles.cardText}>
      //     <Card.Title>Card Title</Card.Title>
      //     <Card.Text>
      //       Some quick example text to build on the card title and make up the
      //       bulk of the card's content.
      //     </Card.Text>
      //     <Button style={styles.button}>Go somewhere</Button>
      //   </Card.Body>
      // </Card>
      // <Card style={styles.card}>
      //   <Image src={image3} fluid />
      //   {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      //   <Card.Body style={styles.cardText}>
      //     <Card.Title>Card Title</Card.Title>
      //     <Card.Text>
      //       Some quick example text to build on the card title and make up the
      //       bulk of the card's content.
      //     </Card.Text>
      //     <Button style={styles.button}>Go somewhere</Button>
      //   </Card.Body>
      // </Card>
      // <Card style={styles.card}>
      //   <Image src={image4} fluid />
      //   {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      //   <Card.Body style={styles.cardText}>
      //     <Card.Title>Card Title</Card.Title>
      //     <Card.Text>
      //       Some quick example text to build on the card title and make up the
      //       bulk of the card's content.
      //     </Card.Text>
      //     <Button style={styles.button}>Go somewhere</Button>
      //   </Card.Body>
      // </Card> */}
    


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
    margin: "20px", // Exemple de style supplémentaire
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", // Exemple de style supplémentaire
  },
  cardText: {
    fontSize: "16px", // Exemple de style pour le texte dans la card
    color: "#333", // Exemple de couleur du texte
  },
  button: {
    backgroundColor: "#007bff", // Exemple de couleur d'arrière-plan du bouton
    borderColor: "#007bff", // Exemple de couleur de bordure du bouton
    borderRadius: "5px", // Exemple de style pour arrondir les coins du bouton
    marginTop: "30px", // Exemple de marge supérieure pour le bouton
    marginBottom: "20px",
    flex: "1",
  },
};

export default CardProduit;
