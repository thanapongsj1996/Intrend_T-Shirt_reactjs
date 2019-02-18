import React, { Component } from 'react'

class Calculator extends Component {

    render() {
        return (
            <div>
                <h1 className='text-right'>340</h1>
                <hr />
                <ul className='list-unstyled'>
                    <li className='text-right text-success title'>
                        เสื้อเบอร์ 1 x 1 = 200.0
                        <button className='btn btn-light btn-sm'>X</button>
                    </li>
                    <li className='text-right text-success title'>
                        เสื้อเบอร์ 2 x 1 = 250.0
                        <button className='btn btn-light btn-sm'>X</button>
                    </li>
                </ul>
                <hr />
                <button className='btn btn-block btn-danger title'>ยืนยัน</button>
                <button className='btn btn-block btn-secondary title'>ยกเลิก</button>
            </div>
        )
    }
}

export default Calculator