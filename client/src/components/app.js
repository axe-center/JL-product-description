import React from 'react';
import Product from './Product.js'
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
            currentProduct: {
                description: "Duis kale chips gochujang unicorn chambray tote bag ipsum dolore vaporware craft beer fanny pack skateboard in. Forage vape kogi mustache farm-to-table laborum aute aesthetic craft beer echo park food…",
                images: ['hi'],
                name: "Retirement",
                price: 1401,
                productId: 1,
                tag: "boarding"
            }
        }
    }
    componentDidMount() {
        axios.get(`http://ec2-3-19-58-144.us-east-2.compute.amazonaws.com/api/products`)
        .then(res => {
            console.log(res)
            this.setState({products: res.data})
        })
        .then(() => {
            this.setState({currentProduct: this.state.products[0]})
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
                <Product currentProduct={this.state.currentProduct}/>        
            </Grid>
        </Paper>
        )
    }
}

export default App;