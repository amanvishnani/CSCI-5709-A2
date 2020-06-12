import SummaryItem from "../../components/SummaryItem";
import React, { useEffect, useState } from "react";
import { getProductById } from "../../service/ProductService";
import { useParams } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import { Typography, Button, CardContent, Card, CardActionArea } from "@material-ui/core";


function OrderSummary(props) {

    const [product, setProduct] = useState({
        id: -1,
        title: "Title",
        description: "Description.",
        image: "",
        salePrice: "",
        actualPrice: ""
    })
    let { productId } = useParams()
    const [total, setTotal] = useState(0)

    async function loadProductDetails(id) {
        let product = await getProductById(id)
        console.log("Details fetched")
        setProduct(product)
        setTotal(parseFloat(product.salePrice.substr(1,)))
    }

    useEffect(() => {
        if (product.id === -1) {
            loadProductDetails(productId)
        }
        console.log("Effect called")
        return () => {
            //@TODO
        }
    }, [product.id, productId])

    function handleQuantityChange(productSummary) {
        setTotal(productSummary.orderTotal)
    }


    return (
        <div style={{ margin: "40px" }}>
            <h1>Order Summary</h1>
            {product.id === -1 ? <span>Loading</span> : <SummaryItem quantityChange={(productSummary) => handleQuantityChange(productSummary)} product={product}></SummaryItem>}
            <br />
            <Divider />
            <Typography variant="h4" style={{ marginTop: "20px" }}> Address </Typography>
            <Grid item md={4} xs={12} style={{ marginTop: "20px" }}>
                <Card>
                    <CardActionArea>
                        <CardContent>
                            <Typography variant="h6" align="left">Aman Vishnani</Typography> <br />
                            <Typography variant="body1" align="left" title="address">
                                2990  Harron Drive, Cockeysville, Maryland, 21030
                        </Typography>
                            <Typography align="left" variant="subtitle1">
                                Mobile: 410-430-0955
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <br />
            <Divider />
            <Grid container justify={"flex-end"} style={{ marginTop: "20px" }}>
                <Grid item xs={6} md={2}>
                    <Typography variant="h6">Total</Typography>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Typography variant="h6">$ {total}</Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                    <Button variant="contained" color="primary">
                        Pay Now
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default OrderSummary;