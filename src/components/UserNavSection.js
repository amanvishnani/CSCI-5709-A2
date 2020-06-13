import React from 'react'
import { Grid, Card, Typography, Hidden, List, ListItem, ListItemIcon, ListItemText, Divider, CardActionArea } from '@material-ui/core'
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import HomeIcon from "@material-ui/icons/Home";
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

import PropTypes from 'prop-types'

function UserNavSection(props) {
    return (
        <div>
            <Card>
                <Hidden smDown>
                    <List>
                        <ListItem button selected={props.selectedItem==="PAST_ORDERS"}>
                            <ListItemIcon>
                                <LocalShippingIcon />
                            </ListItemIcon>
                            <ListItemText>Past Orders</ListItemText>
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText>Manage Addresses</ListItemText>
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemIcon>
                                <PowerSettingsNewIcon />
                            </ListItemIcon>
                            <ListItemText>Logout</ListItemText>
                        </ListItem>
                    </List>
                </Hidden>
                <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                    <Hidden mdUp>
                        <Grid container spacing={0}>
                            <Grid item xs={4}>
                                <CardActionArea>
                                    <LocalShippingIcon />
                                    <Typography variant="body1">Past Order</Typography>
                                </CardActionArea>
                            </Grid>
                            <Grid item xs={4}>
                                <CardActionArea>
                                    <HomeIcon />
                                    <Typography variant="body1">Addresses</Typography>
                                </CardActionArea>
                            </Grid>
                            <Grid item xs={4}>
                                <CardActionArea>
                                    <PowerSettingsNewIcon />
                                    <Typography variant="body1">Logout</Typography>
                                </CardActionArea>
                            </Grid>
                        </Grid>
                    </Hidden>
                </div>
            </Card>
        </div>
    )
}

UserNavSection.propTypes = {
    selectedItem: PropTypes.string
}

export default UserNavSection

