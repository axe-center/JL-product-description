import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';



const styles = {
    root: {
        color: 'black',
    }
}

function Title(props) {
    const classes = { props };
    return (
        <div>
            <Typography variant='display3' style={{ color: 'black' }} className={classes.root}>{props.currentProduct.name}</Typography>
        </div >
    )
}

export default withStyles(styles)(Title);