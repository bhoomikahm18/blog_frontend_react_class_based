import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Blog extends Component {
  render() {
    return (
      <>
        <div className="post-preview" >
          <Link to={`/blog/${this.props.id}`}>
            <h2 className="post-title">{this.props.title}</h2>
            <h3 className="post-subtitle">{this.props.description}</h3>
            <h3 className="post-image">{this.props.imageURL}</h3>
          </Link>

          <p className="post-meta">
            Posted by <Link to={`/otherBlogs/${this.props.isUser}`}>{this.props.user}</Link>
            &nbsp;
          </p>
        </div>
        {/* Divider*/}
        <hr className="my-4" />
      </>
    )
  }
}

export default Blog