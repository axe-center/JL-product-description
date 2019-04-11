import React from 'react';
import Typography from '@material-ui/core/Typography';

const Title = (props) => {
    return (
        <div className='title-container'>
            <Typography>
                <h3>{props.currentProduct.name}</h3>
            </Typography>
        </div>
    )
}

export default Title;