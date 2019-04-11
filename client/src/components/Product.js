import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

const Product = (props) => {
    return (
        <div>
          <div className='title-container'>
            <h3>{props.currentProduct.name}</h3>
        </div>
            <div className='content-container'>
                <div className='image-container'>
                <img src={props.currentProduct.images[0]} className='main-image'></img>
                    {/* <img src='http://hultsbruk1697.se/wp-content/uploads/motala01.png' className='main-image'></img> */}
                </div>
                <div className='description-text'>
                <Typography variant='body2' align='left' gutterBottom>
                    Product Description:
                </Typography>
                    {/* <h3>Product Description:</h3> */}
                <Typography variant='body1' align='center' gutterBottom>
                    {props.currentProduct.description}
                </Typography>
                </div>
                <div className='price-description'>
                <Typography variant='display1'>Price:</Typography>
                <Typography variant='display2'>${props.currentProduct.price}</Typography>
                    {/* <button className='btn-primary'>Add To Cart</button> */}
                    <Card variant="contained" color="primary">Add To Cart
                    </Card>
                </div> 
                </div> {/*content-container*/}
                <div className='gallery-container'>
                    <div className='image-gallery'>
                        <img className='gallery-image' src={props.currentProduct.images[1]}></img>
                    </div>
                    <div className='image-gallery'>
                        <img className='gallery-image' src={props.currentProduct.images[2]}></img>
                    </div>
                    {/* <div className='image-gallery'>
                        <img className='gallery-image' src='https://banner2.kisspng.com/20171202/f8e/axe-png-file-5a223d9d3df341.5340406415121934372538.jpg'></img>
                    </div> */}
                </div>
        </div>
    )
}

export default Product;