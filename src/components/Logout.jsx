import React, { Component } from 'react'
import Home from './Home';

export class Logout extends Component {
  constructor() {
    super();
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.setLoggedIn(true);
    window.location.replace("/myBlogs")
    localStorage.clear();
  }
  render() {
    return (
      <div onClick={this.handleLogout}>
        <Home />
      </div>
    )
  }
}

export default Logout