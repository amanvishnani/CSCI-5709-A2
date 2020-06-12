import React, { useState, useEffect } from 'react';
import OfferCard from '../../components/OfferCard';
import './Landing.css'
import Grid from '@material-ui/core/Grid';
import { Snackbar } from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';
import { getAllProducts } from "../../service/ProductService";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


function Landing() {

    const [products, setProducts] = useState([])
    const [productFlag, setProductFlag] = useState(false)
    const [open, setOpen] = useState(false)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    useEffect(() => {
        async function init() {
            if (products.length === 0) {
                setProducts(await getAllProducts())
            }
            setProductFlag(true)
        }
        init()
        return () => {

        }
    }, [productFlag, products.length])

    return (
        <div>
            <h1>SALE!!!</h1>
            <div className="Landing-root">
                <Grid container spacing={3}>
                    {
                        products.map(product =>
                            <Grid item xs={12} sm={6} key={product.id} onClick={()=>setOpen(true)} >
                                <OfferCard product={product} />
                            </Grid>
                        )
                    }
                </Grid>
            </div>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="info">
                    Product Detail Page feature not implimented! <br/>
                    Quick Buy feature is implimented!
                </Alert>
            </Snackbar>
        </div>
    );
}

export default Landing;