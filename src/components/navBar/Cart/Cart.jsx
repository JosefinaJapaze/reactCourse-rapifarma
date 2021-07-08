import React from "react";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

import cartIMG from "../../../assets/cart.png"

const useStyles = makeStyles((theme) => ({
    cartButton: {
      float: 'right'
    },
  }));

const Cart = () => {
    const classes = useStyles();
    return (
    <IconButton className={classes.cartButton} edge="end" color="inherit" aria-label="menu">
        <ShoppingCartIcon />
    </IconButton>
    )
}

export default Cart;