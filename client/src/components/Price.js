import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

const Price = (props) => {
    return (
        <div>
            <Typography variant='display1'>Price:</Typography>
            <Typography variant='display2'>${props.currentProduct.price}</Typography>
            {/* <button className='btn-primary'>Add To Cart</button> */}
            <Card variant="contained" color="primary">Add To Cart</Card>
        </div>
    )
}

export default Price;