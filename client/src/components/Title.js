import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    headline: {
        fontSize: `x-large`,
        color: `white`,
    }
}

function Title(props) {
    const classes = { props };
    return (
        <div className={classes.headline}>
            <Typography variant='display3'>{props.currentProduct.name}</Typography>
        </div>
    )
}

export default withStyles(styles)(Title);