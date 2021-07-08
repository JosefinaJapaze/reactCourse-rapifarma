import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Cart from "./Cart/Cart";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  button: {
    color: 'white'
  },
}));

const NavBar = (props) => {
    const classes = useStyles();

    return (
        <AppBar position="static">
        <Toolbar>
          <Grid container spacing={24}>
            <Grid item xs={11}>
              <div>
                <Typography variant="h6">
                  Rapifarma
                </Typography>
                <Button className={classes.button}>Inicio</Button>
                <Button className={classes.button}>Quienes somos</Button>
                <Button className={classes.button}>Tienda online</Button>
                <Button className={classes.button}>Catálogo</Button>
              </div>
            </Grid>
            <Grid item xs={1}>
              <Cart />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
        
    );
};

export default NavBar;

//<button onClick={props.darBienvenida}>SALUDAME URA</button>
   //         <Cart />