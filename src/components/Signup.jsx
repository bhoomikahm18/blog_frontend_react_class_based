import React, { Component } from 'react'
import Header from './Header';

export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {
        name: "",
        email: "",
        password: ""
      }

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState((prevState) => ({
      inputs: {
        ...prevState.inputs,
        [e.target.name]: e.target.value,
      }
    }))
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state.inputs);
  }

  render() {
    return (
      <>
        <Header banner="/assets/img/about-bg.jpg" heading="Signup Page" subHeading="Register a new User" />

        <main className="mb-4">
          <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
              <div className="col-md-10 col-lg-8 col-xl-7">

                <div className="my-5">
                  <form action="/auth/signup" method="POST" onSubmit={this.handleSubmit}>
                    <div className="form-floating">
                      <input className="form-control" id="name" name="name" type="text" onChange={this.handleChange} value={this.state.name}
                        placeholder="Type your Name..." />
                      <label htmlFor="name">Name</label>
                    </div><br />
                    <div className="form-floating">
                      <input className="form-control" id="email" name="email" type="email" onChange={this.handleChange} value={this.state.email}
                        placeholder="Type your registed email..." required />
                      <label htmlFor="email">Email</label>
                    </div><br />
                    <div className="form-floating">
                      <input className="form-control" id="password" name="password" type="password" onChange={this.handleChange} value={this.state.password}
                        placeholder="Type the password..." required />
                      <label htmlFor="password">Password</label>
                    </div><br />
                    {/* Submit Button*/}
                    <div style={{ textAlign: 'center' }}>
                      <button className="btn text-uppercase" id="submitButton" type="submit" style={{ color: 'orange' }}>Sign Up</button><br />
                    </div>

                    <span style={{ 'color': '#dc3545', 'fontWeight': 'bold', 'fontStyle': 'oblique' }}>
                      &ensp; &ensp;
                    </span>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    )
  }
}

export default Signup