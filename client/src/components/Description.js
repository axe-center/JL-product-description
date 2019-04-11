import React from 'react';
import Typography from '@material-ui/core/Typography';
const Description = (props) => {
    return (
        <div>
            <Typography variant='body2' align='left' gutterBottom noWrap>
                Product Description:
            </Typography>
            {/* <h3>Product Description:</h3> */}
            <Typography variant='body1' align='center' gutterBottom>
                {props.currentProduct.description}
            </Typography>
        </div>
    )
}

export default Description;