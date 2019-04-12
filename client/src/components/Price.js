import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';

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
        color: `black`
    },
    color: {
        backgroundColor: `#b12222`,
    }
}
function Price(props) {
    const { classes } = props;
    return (
        <div>
            <Typography variant='display1' className={classes.priceText}>Price:</Typography>
            <Typography variant='display2' className={classes.price}>${props.currentProduct.price}</Typography>
            {/* <button className='btn-primary'>Add To Cart</button> */}
            <Card variant="contained" className={classes.color}>
                <Typography variant='body2' className={classes.cartText}>Add To Cart</Typography>
            </Card>
        </div>
    )
}
export default withStyles(styles)(Price);