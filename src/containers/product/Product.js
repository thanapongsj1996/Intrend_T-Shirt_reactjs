import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProductList from '../../components/product/ProductList'
import axios from 'axios'

class Product extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: null
        }
        this.editProduct = this.editProduct.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
    }

    componentDidMount() {
        axios.get('http://localhost:3001/shirts')
            .then(res => {
                this.setState({
                    products: res.data
                })
            })
    }

    editProduct(product){
        this.props.history.push('products/edit/' + product.id)
    }

    deleteOrder(product) {
        axios.delete("http://localhost:3001/shirts/" + product.id)
            .then(res => {
                axios.get('http://localhost:3001/shirts')
                    .then(res => {
                        this.setState({
                            products: res.data
                        })
                    })
            })
    }

    render() {
        return (
            <div>
                <Header />
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-6'>
                            <h1>สินค้า</h1>
                        </div>
                        <div className='col-6'>
                            <button className='btn btn-success title float-right' onClick={()=> this.props.history.push('products/add')}>เพิ่ม</button>
                        </div>
                    </div>
                    <ProductList 
                        products={this.state.products}
                        onEditProduct={this.editProduct}
                        onDeleteProduct={this.deleteOrder} 
                    />
                </div>
                <Footer company='Intrend T-Shirt' email='thanapongsj1996@gmail.com' />
            </div>
        )
    }

}

export default withRouter(Product)