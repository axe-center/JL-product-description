import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentImage: 0
        }
    }

    selectImage(idx) {
        this.setState({ currentImage: idx })
    }
    render() {
        return (
            <div>
                <div className='title-container'>
                    <h3>{this.props.currentProduct.name}</h3>
                </div>
                <div className='content-container'>
                    <div className='image-container'>
                        <img src={this.props.currentProduct.images[this.state.currentImage]} className='main-image'></img>
                        {/* <img src='http://hultsbruk1697.se/wp-content/uploads/motala01.png' className='main-image'></img> */}
                    </div>
                    <div className='description-text'>
                        <Typography variant='body2' align='left' gutterBottom>
                            Product Description:
                </Typography>
                        {/* <h3>Product Description:</h3> */}
                        <Typography variant='body1' align='center' gutterBottom>
                            {this.props.currentProduct.description}
                        </Typography>
                    </div>
                    <div className='price-description'>
                        <Typography variant='display1'>Price:</Typography>
                        <Typography variant='display2'>${this.props.currentProduct.price}</Typography>
                        {/* <button className='btn-primary'>Add To Cart</button> */}
                        <Card variant="contained" color="primary">Add To Cart
                    </Card>
                    </div>
                </div> {/*content-container*/}
                <div className='gallery-container'>
                    {this.props.currentProduct.images.map((img, idx) => {
                        return <div className='image-gallery' onClick={() => this.selectImage(idx)}>
                            <img className={`gallery-image ${idx === this.state.currentImage ? 'active' : ''}`} src={img}></img>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}
export default Product;