import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

export class BlogDetail extends Component {
  render() {
    return (
      <>
        <header className="masthead" style={{ "backgroundImage": "url('assets/img/post-sample-image.jpg')" }}>
          <div className="container position-relative px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
              <div className="col-md-10 col-lg-8 col-xl-7">
                <div className="page-heading">
                  <h1>Blog Details</h1>
                  <span className="subheading">Edit or Delete Blog</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7"

            >

            </div>
          </div>
        </div>
      </>
    )
  }
}

export default BlogDetail