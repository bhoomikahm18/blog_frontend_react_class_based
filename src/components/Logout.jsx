import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Logout extends Component {
  constructor() {
    super();
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.isLoggedIn(false)
    localStorage.clear();
  }
  render() {
    return (
      <div onClick={this.handleLogout}>
        <Link to='/auth'></Link>
        Thank You

      </div>
    )
  }
}

export default Logout