import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
                <div className="container px-4 px-lg-5">
                    <a className="navbar-brand" href="/">Blog App</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto py-4 py-lg-0">
                            <li className="nav-item"><a href="/blogs" className="nav-link px-lg-3 py-3 py-lg-4">All Blogs</a></li>

                            <li className="nav-item"><a href="/myBlogs" className="nav-link px-lg-3 py-3 py-lg-4">My Blogs</a></li>

                            <li className="nav-item"><a href="/blogs/add" className="nav-link px-lg-3 py-3 py-lg-4">Add Blogs</a></li>

                        </ul>
                    </div>
                    <button class="btn btn-warning me-2" type="button" >Login</button>
                    <button class="btn btn-warning me-2" type="button" >Sign Up</button>
                </div>
            </nav>
        )
    }
}

export default Header