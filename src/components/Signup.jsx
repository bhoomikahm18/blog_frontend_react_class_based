import React, { Component } from 'react'
import axios from 'axios';
// import { Link } from 'react-router-dom';

export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {
        name: "",
        email: "",
        password: ""
      },
      error: {
        errFlag: false,
        errStatus: "",
        errMsg: ""
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendRequest = this.sendRequest.bind(this);

  }

  handleChange(e) {
    this.setState((prevState) => ({
      ...prevState,
      inputs: {
        ...prevState.inputs,
        [e.target.name]: e.target.value,
      }
    }))
  }

  async sendRequest() {
    let res;
    try {
      res = await axios.post(`http://localhost:5000/api/user/signup`, {
        name: this.state.inputs.name,
        email: this.state.inputs.email,
        password: this.state.inputs.password,
      })
    }
    catch (err) {
      this.setState(prevState => ({
        ...prevState,
        error: {
          errFlag: true,
          errStatus: err.response.request.status,
          errMsg: err.response.data.message,
        }
      }));
    }

    let data = null;
    if (res) {
      data = await res.data;
      console.log(data);
    }
    return data;
  }

  handleSubmit(e) {
    e.preventDefault()
    try {
      this.sendRequest()
        .then(data => localStorage.setItem("userID", data.user._id))
        .then(data => {
          this.props.setLoggedIn(true);
          window.location.replace("/myBlogs")
        })
    } catch (err) {
      console.log(err);
      this.setState(prevState => ({
        ...prevState,
        error: {
          errFlag: true,
          errStatus: err.response.request.status,
          errMsg: err.response.data.message,
        }
      }));
    }
  }

  render() {
    return (
      <>
        <header className="masthead" style={{ "backgroundImage": "url('assets/img/about-bg.jpg')" }}>
          <div className="container position-relative px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
              <div className="col-md-10 col-lg-8 col-xl-7">
                <div className="page-heading">
                  <h1>Sign up</h1>
                  <span className="subheading">Register new user</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="mb-4">
          <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
              <div className="col-md-10 col-lg-8 col-xl-7">

                <div className="my-5">
                  <form action="/auth/signup" method="POST" onSubmit={this.handleSubmit}>
                    <div className="form-floating">
                      <input className="form-control" id="name" name="name" type="text" onChange={this.handleChange} value={this.state.name}
                        placeholder="Type your Name..." required />
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
                      <button className="btn text-uppercase" id="submitButton" type="submit" style={{ color: 'orange' }}>Sign Up</button>
                    </div>

                    {
                      (this.state.error.errFlag) &&
                      <span style={{ 'color': '#dc3545', 'fontWeight': 'bold', 'fontStyle': 'oblique' }}>
                        &ensp; &ensp; {this.state.error.errMsg} &ensp; &ensp; :  {this.state.error.errStatus}
                      </span>
                    }
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