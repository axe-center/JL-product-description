import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    information: {
        color: `black`,
        textAlign: `center`,
        fontSize: `larger`,
        fontWeight: `bold`
    },
    paperBox: {
        marginTop: `5%`
    },
    box: {
        width: `100%`,
        backgroundColor: `#f8f8f8`,
        textAlign: `center`,
        padding: `10px`
        // marginTop: `10%`
    }
    // cartText: {
    //     fontWeight: 900,
    //     color: `#fff`,
    //     textAlign: `center`,
    //     fontSize: `x-large`,
    //     width: `100`
    // },
    // priceText: {
    //     color: `black`,
    //     fontSize: `larger`
    // },
    // price: {
    //     textAlign: `center`,
    //     color: `black`,
    //     width: `100%`,
    //     backgroundColor: `#f8f8f8`,
    //     padding: `10px`
    // },
    // color: {
    //     backgroundColor: `#f8f8f8`,
    // },
    // paperPadding: {
    //     padding: `10px`
    // }
}

const AdditionalInfo = (props) => {
    const { classes } = props;
    return (
        <Grid container spacing={24} className={classes.box} >
            <Card variant="contained" className={classes.box}>
                <Grid item xs={12} >
                    <Typography variant='display1' className={classes.information}>Have Questions?  855-770-3373</Typography>
                    <Typography variant='display1'>Call our experts for product info and phone-only specials. Or click here to chat now.</Typography>
                </Grid>
                {/* <button className='btn-primary'>Add To Cart</button> */}
                <Grid item xs>
                    <Typography></Typography>
                </Grid>
                <Grid item xs>

                </Grid>
                <Grid item xs>

                    <Typography variant='body2' className={classes.cartText}></Typography>
                </Grid>
            </Card>
        </Grid >
    )
}

export default withStyles(styles)(AdditionalInfo);