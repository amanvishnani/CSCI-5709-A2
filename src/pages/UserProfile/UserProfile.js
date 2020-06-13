import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import { getAllOrders } from "../../service/OrderService";
import { getAddressById } from "../../service/AddressService";
import PastOrders from '../../components/PastOrders';
import UserGreetingsCard from "../../components/UserGreetingsCard";
import UserNavSection from "../../components/UserNavSection";
// import PropTypes from 'prop-types'

function UserProfile(props) {

    const [orders, setOrders] = useState([]);
    const [currentTab, setCurrentTab] = useState("PAST_ORDERS")

    useEffect(() => {
        async function Init() {
            let orders1 = await getAllOrders()
            for (const order of orders1) {
                let addr = await getAddressById(order.addressId)
                order.address = addr;
            }
            setOrders(orders1);
        }
        Init()
        return () => {

        }
    })

    return (
        <div style={{ flex: 1, margin: "20px" }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                    <UserGreetingsCard />
                    <div style={{ marginTop: "20px" }}>
                        <UserNavSection selectedItem={currentTab} />
                    </div>
                </Grid>
                <Grid item xs={12} md={8}>
                    {currentTab === "PAST_ORDERS" && <PastOrders orders={orders} />}
                </Grid>
            </Grid>
        </div>
    )
}

UserProfile.propTypes = {

}

export default UserProfile

