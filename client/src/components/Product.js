import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
                {/* <div className='title-container'>
                    <h3>{this.props.currentProduct.name}</h3>
                </div> */}
                <img src={this.props.currentProduct.images[this.state.currentImage]} className='main-image'></img>
                <div className='content-container'>

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