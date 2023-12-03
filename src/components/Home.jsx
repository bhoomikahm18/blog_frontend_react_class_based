import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

export class Home extends Component {
    render() {
        return (
            <>
                <Header banner="/assets/img/home-bg.jpg" heading="Filmy BLog" subHeading="Welcome to Chitralooka"/>
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">

                            <div className="d-flex justify-content-end mb-4"><Link className="btn btn-primary text-uppercase"
                                to="/">Older Posts →</Link></div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Home