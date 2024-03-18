import React from 'react';
import { useLocation } from 'react-router-dom';
import Navigationbar from '../Components/NavigationBar';
import CardPanier from '../Components/CardPanier';

const Panier = () => {
    const { state } = useLocation();
    const product = state ? state.product : null;

    return (
        <>
            <Navigationbar />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        {product ? (
                            <div className='mt-5'>
                                <h2 className='mb-3'>Produit ajouté au panier :</h2>
                                {/* Utilisation du composant de carte produit pour afficher les détails */}
                                <CardPanier product={product} />
                            </div>
                        ) : (
                            <p>Aucun produit n'a été ajouté au panier.</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Panier;
