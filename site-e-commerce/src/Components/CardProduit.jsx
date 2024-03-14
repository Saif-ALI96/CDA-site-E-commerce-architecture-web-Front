import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardProduit = () => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body style={styles.cardText}>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="success">Go somewhere</Button>
      </Card.Body>
    </Card>
        </>
    );
};

const styles = {
    card: {
        width: '18rem',
        margin: '20px', // Exemple de style supplémentaire
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', // Exemple de style supplémentaire
    },
    cardText: {
        fontSize: '16px', // Exemple de style pour le texte dans la card
        color: '#333', // Exemple de couleur du texte
    },
    button: {
        backgroundColor: '#007bff', // Exemple de couleur d'arrière-plan du bouton
        borderColor: '#007bff', // Exemple de couleur de bordure du bouton
        borderRadius: '5px', // Exemple de style pour arrondir les coins du bouton
        marginTop: '10px', // Exemple de marge supérieure pour le bouton
    },
};

export default CardProduit;