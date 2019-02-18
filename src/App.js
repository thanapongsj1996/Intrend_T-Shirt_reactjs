import './App.css'
import React, { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Monitor from './components/monitor/Monitor'
import ProductItem from './components/product/ProductItem'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      products: ''
    }
  }

  componentDidMount() {
    this.setState({
      products: [
        {productId: 1, productName: 'เสื้อตามกระแส 1', unitPrice: '250', thumbnail:'/images/products/1.jpg'},
        {productId: 2, productName: 'เสื้อตามกระแส 2', unitPrice: '350', thumbnail:'/images/products/2.jpg'},
        {productId: 3, productName: 'เสื้อตามกระแส 3', unitPrice: '450', thumbnail:'/images/products/3.jpg'}
      ]
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Monitor products={this.state.products} />
        <Footer company='Intrend T-Shirt' email='thanapongsj1996@gmail.com' />
      </div>
    );
  }
}

export default App;
