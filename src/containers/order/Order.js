import React, { Component } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { connect } from 'react-redux'
import { ordersFetch, orderDelete } from '../../actions'

class Order extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.ordersFetch()
    }

    deleteOrder(order) {
        this.props.orderDelete(order.id)
    }

    showOrders() {
        return this.props.orders && this.props.orders.map(order => {
            const date = new Date(order.orderedDate)
            return (
                <div key={order.id} className='col-md-3'>
                    <hr />
                    <p className='text-right'>
                        <button className='btn btn-danger btn-sm title' onClick={() => this.deleteOrder(order)}>X</button>
                    </p>
                    <h5>วันที่ {date.toLocaleDateString()} {date.toLocaleTimeString()}</h5>
                    <ul>
                        {order.orders && order.orders.map(record => {
                            return (
                                <li key={record.product.id} className='text-muted'>
                                    {record.product.productName} X {record.quantity} = {record.product.unitPrice * record.quantity}
                                </li>
                            )
                        })}
                    </ul>
                    <p className='title'>ยอดรวม {order.totalPrice}</p>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <Header />
                <div className='container-fluid'>
                    <h1>รายการสั่งซื้อ</h1>
                    <div className='row'>
                        {this.showOrders()}
                    </div>
                </div>
                <Footer company='Intrend T-Shirt' email='thanapongsj1996@gmail.com' />
            </div>
        )
    }

}

function mapStateToProps({ orders }) {
    return { orders }
}

export default connect(mapStateToProps, { ordersFetch, orderDelete })(Order)