import React, { Component } from 'react'
import Blog from './Blog';
import axios from 'axios';

export class UserBlogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
    }

    this.sendRequest = this.sendRequest.bind(this);
  }

  async sendRequest(id) {
    // const id = localStorage.getItem("userID");
    // console.log(id);
    const res = await axios.get(`http://localhost:5000/api/blog/user/${id}`)
      // .then(data => console.log(data))
      .catch(err => console.log(err))

    let data = null;
    if (res) {
      data = await res.data;
    }
    return data;
  }

  async componentDidMount() {
    const id = localStorage.getItem("userID");
    // console.log(id);
    this.sendRequest(id).then(data => this.setState(data));
    // console.log(this.state.user);
  }

  render() {
    return (
      <>
        <header className="masthead" style={{ "backgroundImage": "url('assets/img/about-bg.jpg')" }}>
          <div className="container position-relative px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
              <div className="col-md-10 col-lg-8 col-xl-7">
                <div className="page-heading">
                  <h1>Blog of {this.state.user.name}</h1>
                  <span className="subheading">View my Blogs</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {this.state.user && this.state.user.blogs && this.state.user.blogs.map((blog, index) => (
          <Blog
            key={index}
            isUser={true}
            id={blog._id}
            user={this.state.user.name}
            description={blog.description}
            title={blog.title}
            image={blog.image}
          />
        ))}
      </>
    )
  }
}

export default UserBlogs