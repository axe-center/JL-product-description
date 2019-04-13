import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = {
    cartText: {
        fontWeight: 900,
        color: `#fff`,
        textAlign: `center`,
        fontSize: `x-large`
    },
    priceText: {
        color: `black`,
        fontSize: `larger`
    },
    price: {
        textAlign: `center`,
        color: `black`,
        width: `-webkit-fill-available`,
        backgroundColor: `#f8f8f8`
    },
    color: {
        backgroundColor: `#f8f8f8`,
    },
    button: {
        backgroundColor: `#b12222`,
        color: `#fff`,
        // float: `right`
    }
}
function Price(props) {
    const { classes } = props;
    return (
        <Grid container spacing={24}>
            <Card variant="contained" className={classes.color} className={classes.price}>
                <Grid item xs={12}>
                    <Typography variant='display1' className={classes.priceText}>Price:</Typography>
                    <Typography variant='display2' className={classes.price}>${props.currentProduct.price}</Typography>
                </Grid>
                {/* <button className='btn-primary'>Add To Cart</button> */}
                <Grid item xs>
                    <Typography><input type='text' maxLength='2' size='2' style={{ float: `left` }} className='quantity-counter'></input></Typography>
                </Grid>
                <Grid item xs>
                    <span className='arrows'>
                        <button><i className="arrow up"></i></button>
                        <button><i className="arrow down"></i></button>
                    </span>
                </Grid>
                <Grid item xs>
                    <Button variant='contained' className={classes.button}>Add To Cart</Button>
                    <Typography variant='body2' className={classes.cartText}></Typography>
                </Grid>
            </Card>
        </Grid >
    )
}
export default withStyles(styles)(Price);