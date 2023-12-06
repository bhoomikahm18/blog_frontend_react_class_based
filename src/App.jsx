import React, { Component } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Logout from './components/Logout'
import Signup from './components/Signup'
import AddBlogs from './components/AddBlogs'
import UserBlogs from './components/UserBlogs'
import BlogDetail from './components/BlogDetail'

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    }
    this.setLoggedIn = this.setLoggedIn.bind(this);
  }

  setLoggedIn() {
    this.setState()
  }
  render() {
    return (
      <>
        <Navbar isLoggedIn={this.state.isLoggedIn} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Login setLoggedIn={this.setLoggedIn} />} />
          <Route path='/auth/logout' element={<Logout setLoggedIn={this.setLoggedIn()} />} />
          <Route path='/auth/signup' element={<Signup setLoggedIn={this.setLoggedIn()} />} />

          <Route path='/' element={<Home />} />
          <Route path='/blog/add' element={<AddBlogs isLoggedIn={this.state.isLoggedIn} />} />
          <Route path='/myBlogs' element={<UserBlogs />} />
          <Route path='/myBlogs/:id' element={<BlogDetail />} />
        </Routes>
        <Footer />

      </>
    )
  }
}

export default App