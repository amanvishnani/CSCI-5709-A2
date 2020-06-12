import React from 'react';
import OfferCard from '../../components/OfferCard';
import './Landing.css'
import Grid from '@material-ui/core/Grid';


function Landing() {

    let products = [{
        id: 1,
        title: "Gorgeous Indoor Plant",
        description: "Monstera may be the perfect houseplant for you if you're looking to create a big, bold, tropical feel in your home. While young, this houseplant has a dense, bushy shape, but as it grows, it wants to vine out. You can keep it bushy with regular pruning or let it climb up a vertical support (such as fishing line fastened into the ceiling), for a decidedly bold and tropical look.",
        image: "https://m.media-amazon.com/images/I/81hN56ywm2L._SR500,500_.jpg",
        salePrice: "$19.99",
        actualPrice: "$49.99"
    }, {
        id: 2,
        title: "Gorgeous Indoor Plant",
        description: "Monstera may be the perfect houseplant for you if you're looking to create a big, bold, tropical feel in your home. While young, this houseplant has a dense, bushy shape, but as it grows, it wants to vine out. You can keep it bushy with regular pruning or let it climb up a vertical support (such as fishing line fastened into the ceiling), for a decidedly bold and tropical look.",
        image: "https://m.media-amazon.com/images/I/81hN56ywm2L._SR500,500_.jpg",
        salePrice: "$19.99",
        actualPrice: "$49.99"
    }]

    return (
        <div>
            <h1>SALE!!!</h1>
            <div className="Landing-root">
                <Grid container spacing={3}>
                    {
                    products.map(product => 
                        <Grid item xs={12} sm={6} key={product.id} >
                            <OfferCard product={product} /> 
                        </Grid>
                    )
                    }
                </Grid>
            </div>
        </div>
    );
}

export default Landing;