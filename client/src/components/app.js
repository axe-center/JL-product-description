import React from 'react';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import axios from 'axios';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            tags: [],
            currentProduct: {}
        }
    }
    componentDidMount() {
        axios.get(`/api/products`)
        .then(res => {
            console.log(res)
            this.setState({products: res.data})
        })
        .catch(err => {
            console.log(`${err} there's been an error`)
        })
    }

    selectProduct() {

    }

    render() {
        return (
        <Paper>
        <CssBaseline />
            <Grid container className='root'>
                <div className='title-container'><h3>The Wood Destroyer</h3></div>
                <div className='content-container'>
                    <div className='image-container'>
                      {/* <img src='http://hultsbruk1697.se/wp-content/uploads/motala01.png' className='main-image'></img> */}
                    </div>
                    <div className='description-text'>
                    <Typography variant='display1' align='left' gutterBottom>
                        Product Description:
                    </Typography>
                        {/* <h3>Product Description:</h3> */}
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className='price-description'><h4>Price:</h4><h1>$1,400</h1>
                        {/* <button className='btn-primary'>Add To Cart</button> */}
                        <Card variant="contained" color="primary">Add To Cart
                        </Card>
                    </div> 
                </div> {/*content-container*/}
                <div className='gallery-container'>
                    <div className='image-gallery'>
                      <img className='gallery-image' src='https://freepngimg.com/thumb/axe/32925-8-battle-axe-transparent-thumb.png'></img>
                    </div>
                    <div className='image-gallery'>
                      <img className='gallery-image' src='data:image/jpeg;base64,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'></img>
                    </div>
                    <div className='image-gallery'>
                      <img className='gallery-image' src='https://banner2.kisspng.com/20171202/f8e/axe-png-file-5a223d9d3df341.5340406415121934372538.jpg'></img>
                    </div>
                </div>
            </Grid>
        </Paper>
        )
    }
}

export default App;