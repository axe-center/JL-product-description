import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PinchZoomPan from 'react-responsive-pinch-zoom-pan';

class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentImage: 0,
            isHovering: false
        }
    }

    selectImage(idx) {
        this.setState({ currentImage: idx })
    }
    imageEnter(e) {
        console.log(e);
    }

    imageLeave(e) {
        console.log(e)
    }

    render() {
        return (
            <div>
                <PinchZoomPan doubleTapBehavior='zoom' position='center' initialScale={1} minScale={1} maxScale={4} zoomButtons={false}>
                    <img src={this.props.currentProduct.images[this.state.currentImage]} className='main-image' onMouseEnter={(e) => { this.imageEnter(e) }} onMouseLeave={(e) => { this.imageLeave(e) }}></img>
                </PinchZoomPan>
                <div className='gallery-container'>
                    {this.props.currentProduct.images.map((img, idx) => {
                        return <div className={`image-gallery ${idx === this.state.currentImage ? 'active' : ''}`} key={idx} onClick={() => this.selectImage(idx)}>
                            <img className={`gallery-image ${idx === this.state.currentImage ? 'active' : ''}`} src={img}></img>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}
export default Product;