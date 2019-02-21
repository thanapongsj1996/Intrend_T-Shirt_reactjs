import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {

    constructor(props) {
        super(props)
        this.state = { date: new Date() }
        setInterval(() => this.tick(), 1000)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div className='container-fluid'>
                <div className='row mt-3'>
                    <div className='col-md-8 text-left'>
                        <h1 className='text-muted title'><img style={{ height: 50 }} src='/images/logo/logo.png' alt='' />Intrend T-Shirt</h1>
                    </div>
                    <div className='col-md-4 text-right'>
                        <h5 className='text-muted mt-3'>{this.state.date.toLocaleTimeString()}</h5>
                        <ul className='list-inline'>
                            <li className='list-inline-item title'><Link className='text-success' to='/'>หน้าหลัก</Link></li>
                            <li className='list-inline-item title'>|</li>
                            <li className='list-inline-item title'><Link className='text-success' to='/orders'>รายการสั่งซื้อ</Link></li>
                            <li className='list-inline-item title'>|</li>
                            <li className='list-inline-item title'><Link className='text-success' to='/products'>สินค้า</Link></li>
                            <li className='list-inline-item title'>|</li>
                            <li className='list-inline-item title'><Link className='text-success' to='/about'>เกี่ยวกับเรา</Link></li>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}

export default Header