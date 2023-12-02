import React, { Component } from 'react'

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        }
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        localStorage.clear();
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
                <div className="container px-4 px-lg-5">
                    <a className="navbar-brand" href="/">Blog App</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>
                    {this.props.isLoggedIn && <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto py-4 py-lg-0" >
                            <li className="nav-item"><a href="/blogs" className="nav-link px-lg-3 py-3 py-lg-4">All Blogs</a></li>

                            <li className="nav-item"><a href="/myBlogs" className="nav-link px-lg-3 py-3 py-lg-4">My Blogs</a></li>

                            <li className="nav-item"><a href="/blogs/add" className="nav-link px-lg-3 py-3 py-lg-4">Add Blogs</a></li>

                        </ul>
                    </div>}
                    {!this.props.isLoggedIn &&
                        <><a href='/auth'><button class="btn btn-warning me-2" type="button" >Login</button>
                            <button class="btn btn-warning me-2" type="button" >Sign Up</button></a>
                        </>}
                    {this.props.isLoggedIn && <a href='/auth'><button class="btn btn-warning me-2" type="button" onClick={this.handleLogout}>Logout</button></a>}
                </div>
            </nav>
        )
    }
}

export default Header