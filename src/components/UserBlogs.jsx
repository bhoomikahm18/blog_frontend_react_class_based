import React, { Component } from 'react'
import Blog from './Blog';
import axios from 'axios';

export class UserBlogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
    }
    const id = localStorage.getItem("userID");

    this.sendRequest = this.sendRequest.bind(this);
  }

  async sendRequest() {
    const res = await axios.post(`http://localhost:5000/api/blog/user/${this.id}`)
      .catch(err => console.log(err))

    let data = null;
    if (res) {
      data = await res.data;
    }
    return data;
  }

  async componentDidMount() {
    this.sendRequest().then(data => this.setState(data));
  }

  render() {
    return (
      <>
        {" "}
        {this.state.user && this.state.user.blogs && this.state.user.blogs.map((blog, index) => (
          <Blog
            key={index}
            isUser={true}
            id={blog._id}
            user={blog.user.name}
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