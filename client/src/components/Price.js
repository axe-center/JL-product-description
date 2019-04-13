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
class Price extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quantityCount: 1
        }
    }

    handleClick(e, string) {
        if (string === 'up') {
            this.setState({ quantityCount: this.state.quantityCount + 1 })
        }
        if (string === 'down') {
            this.setState({ quantityCount: this.state.quantityCount - 1 })
        }
        if (string === 'change') {
            this.setState({ quantityCount: e.target.value })
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <Grid container spacing={24}>
                <Card variant="contained" className={classes.color} className={classes.price}>
                    <Grid item xs={12}>
                        <Typography variant='display1' className={classes.priceText}>Price:</Typography>
                        <Typography variant='display2' className={classes.price}>${this.props.currentProduct.price}</Typography>
                    </Grid>
                    {/* <button className='btn-primary'>Add To Cart</button> */}
                    <Grid item xs>
                        <Typography><input type='text' onChange={(e) => { this.handleClick(e, 'change') }} maxLength='2' size='2' value={this.state.quantityCount} style={{ float: `left` }} className='quantity-counter'></input></Typography>
                    </Grid>
                    <Grid item xs>
                        <span className='arrows'>
                            <button onClick={(e) => { this.handleClick(e, `up`) }}><i className="arrow up"></i></button>
                            <button onClick={(e) => { this.handleClick(e, `down`) }}><i className="arrow down"></i></button>
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
}
export default withStyles(styles)(Price);