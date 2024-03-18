import React, { useState } from 'react';
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { Button } from 'react-bootstrap';

const CardPanier = ({ product }) => {
    const [panierVide, setPanierVide] = useState(false);
    const [cartVisible, setCartVisible] = useState(true);

    const validerCommande = () => {
        setPanierVide(true);
        setCartVisible(false); // Cacher la carte après validation de la commande
    };

    return (
        <>
        {cartVisible && // Condition pour afficher la carte uniquement si cartVisible est true
        <Card>
            <Image src={panierVide ? null : product.image} fluid />
            <Card.Body>
                <Card.Title>{panierVide ? null : product.titre}</Card.Title>
                <Card.Text>{panierVide ? null : product.description}</Card.Text>
                <Card.Text>{panierVide ? null : product.prix} €</Card.Text>
                <Button variant="success" onClick={validerCommande}>
                    Valider la commande
                </Button>
            </Card.Body>
        </Card>
        }
        </>
    );
};

export default CardPanier;
