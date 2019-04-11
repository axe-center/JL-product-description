import React from 'react';
import Product from './Product.js'
import Title from './Title.js';
import Description from './Description.js';
import Price from './Price.js';
import ImageGallery from './ImageGallery.js';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import axios from 'axios';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            tags: [],
            currentProduct: {
                description: "Duis kale chips gochujang unicorn chambray tote bag ipsum dolore vaporware craft beer fanny pack skateboard in. Forage vape kogi mustache farm-to-table laborum aute aesthetic craft beer echo park food…",
                images: ['hi'],
                name: "Retirement",
                price: 1401,
                productId: 1,
                tag: "boarding"
            },
            productId: 100
        }
    }
    componentDidMount() {
        axios.get(`http://ec2-13-59-78-47.us-east-2.compute.amazonaws.com/api/products`)
            .then(res => {
                console.log(res)
                this.setState({ products: res.data })
            })
            .then(() => {
                this.setState({ currentProduct: this.state.products[this.state.productId - 1] })
            })
            .catch(err => {
                console.log(`${err} there's been an error`)
            })
        window.addEventListener('productId', (e) => {
            this.setState({
                productId: e.detail
            }, () => {
                this.setState({ currentProduct: this.state.products[this.state.productId - 1] })
            })
        })
    }

    selectProduct() {

    }

    render() {
        return (
            <Grid container spacing={24}>
                <Grid item xs={8}>
                    {/* <Paper> */}
                    <Title currentProduct={this.state.currentProduct} />
                    {/* </Paper> */}
                </Grid>
                <Grid item xs={6}>
                    {/* <Paper> */}
                    <Product currentProduct={this.state.currentProduct} />
                    {/* </Paper> */}
                </Grid>
                <Grid item xs={3}>
                    {/* <Paper> */}
                    <Description currentProduct={this.state.currentProduct} />
                    {/* </Paper> */}
                </Grid>
                <Grid item xs={3}>
                    <Paper>
                        <Price currentProduct={this.state.currentProduct} />
                    </Paper>
                </Grid>
                <Grid container spacing={24} >
                    <Grid item xs={4}>
                        <Paper>
                            {/* <ImageGallery currentProduct={this.state.currentProduct} /> */}
                        </Paper>
                    </Grid>
                    {/* <Grid item xs={4}>
                        <Paper>xs=4</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper>xs=4</Paper>
                    </Grid> */}
                </Grid>
            </Grid>
        )
    }
}

export default App;