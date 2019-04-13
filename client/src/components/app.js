import React from 'react';
import Product from './Product.js'
import Title from './Title.js';
import Description from './Description.js';
import Price from './Price.js';
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
            productId: 22,
        }
    }
    componentDidMount() {
        axios.get(`http://ec2-13-58-247-135.us-east-2.compute.amazonaws.com/api/products`)
            .then(res => {
                // console.log(res)
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
                for (let i = 0; i < this.state.products.length; i++) {
                    if (this.state.products[i].product === this.state.productId) {
                        this.setState({ currentProduct: this.state.products[i] })
                    }
                }
            })
        })
    }

    quantityChange(value) {
        this.state({ quantityCount: value })
    }
    // quantityChange(value) {
    //     this.setState({ quantityCount: value })
    // }

    render() {
        return (
            <Grid container spacing={24}>
                <Grid item xs={12}>
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
                    <Paper style={{ width: `-webkit-fill-available` }}>
                        <Price quantityCount={this.state.quantityCount} quantityChange={this.quantityChange.bind(this)} currentProduct={this.state.currentProduct} />
                    </Paper>
                </Grid>
                <Grid container spacing={16}>
                    <Grid item xs={4}>
                        <Paper>
                            {/* <ImageGallery currentProduct={this.state.currentProduct} /> */}
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;