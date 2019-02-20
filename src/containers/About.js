import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

class About extends Component {

    render() {
        return (
            <div>
                <Header />
                <div className='container col-md-5'>
                    <h3>สวัสดีครับ</h3>
                    <p className='title text-muted text-justify mt-4 mb-4'>
                        เราคือร้านขายเสื้อตามกระแส โดยลายของเสื้อขึ้นกับกระแสของสังคมในขณะนั้น
                        ลูกค้าสามารถสั่งซื้อได้ และจัดส่งฟรีทั่วประเทศไทย
                        หากสนใจร่วมเป็นส่วนหนึ่งกับเรา ติดต่อผมธนพงษ์
                    </p>
                    <h4 className='text-success'>จาก Intrend T-Shirt</h4>
                </div>
                <Footer company='Intrend T-Shirt' email='thanapongsj1996@gmail.com' />
            </div>
        )
    }
}

export default About