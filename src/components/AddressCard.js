import React from 'react'
import PropTypes from 'prop-types'
import { Typography, CardContent, Card, CardActionArea } from "@material-ui/core";

function AddressCard(props) {
    let selected = false;
    if (props.selectedId === props.address.id) {
        selected = true;
    }
    return (
        <div style={selected ? { borderStyle: "dashed" } : {}}>
            <Card>
                <CardActionArea>
                    <CardContent>
                        <Typography variant="h6" align="left">{props.address.name}</Typography> <br />
                        <Typography variant="body1" align="left" title="address">
                            {props.address.street}
                        </Typography>
                        <Typography align="left" variant="subtitle1">
                            Mobile: {props.address.mobile}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

AddressCard.propTypes = {
    address: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        mobile: PropTypes.string,
        street: PropTypes.string,
    }),
    selected: PropTypes.bool
}

export default AddressCard

