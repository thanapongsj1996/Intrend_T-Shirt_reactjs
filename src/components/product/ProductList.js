import React, { Component } from 'react'
import ProductItem from './ProductItem'

class ProductList extends Component {

    showProducts() {
        if (this.props.products) {
            return this.props.products.map(product => (
                <ProductItem key={product.productId} product={product} onAddOrder={this.props.onAddOrder}/>
            ))
        }
    }



    render() {
        return (
            <div className='row'>
                {this.showProducts()}
            </div>
        )
    }
}

export default ProductList
