import React, { useState } from 'react'
import { Grid } from "@material-ui/core";
import AddressCard from "./AddressCard";
import PropTypes from 'prop-types'
import { saveOrUpdateAddress } from "../service/AddressService";
import UpdateAddressDialog from "./UpdateAddressDialog";

function ManageAddress(props) {
    let addresses = props.addresses || [];
    let config = {
        edit: true,
        delete: true
    }
    const [editState, setEditState] = useState({
        open: false,
        address: {}
    })
    
    function handleSave(address) {
        saveOrUpdateAddress(address).then(
            _ => {
                handleEditClose()
                props.onAddressUpdate && props.onAddressUpdate()
            }
        )
    }
    
    function handleEdit(address) {
        setEditState({
            open: true,
            address: address
        })
    }

    
    function handleEditClose() {
        let state = {...editState}
        state.open = false;
        setEditState(state);
    }

    return (
        <div>
            <Grid spacing={1} container>
                {
                    addresses.map(
                        (address) => {
                            return (
                                <Grid item key={address.id} xs={12} sm={6} md={6}>
                                    <AddressCard onEdit={handleEdit} config={config} address={address} />
                                </Grid>
                            );
                        }
                    )
                }
            </Grid>
            {editState.open && 
            <UpdateAddressDialog onSave={_ => {handleSave && handleSave(_)}} handleClose={handleEditClose} open={editState.open} address={editState.address} />}
        </div>
    )
}

ManageAddress.propTypes = {
    addresses: PropTypes.arrayOf(PropTypes.any)
}

export default ManageAddress

