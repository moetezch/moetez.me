import React from 'react'
import Link from 'gatsby-link'
import { Navbar } from 'react-bulma-components'
import image from "../images/logo.png"

const Header = () => (

  <Navbar style={{ height: '4rem' }} color="light">
    <Navbar.Brand >
      <Link to="/" className="navbar-item">
        <img
          src={image}
          alt="Moetez Chaabene"
          width="150"
          height="28"
        />
      </Link>
      <Navbar.Burger />
    </Navbar.Brand>
    <Navbar.Menu>
      <Navbar.Container>

        <Link className="navbar-item" to="/about">
          <i className="fa fa-user " style={{ marginRight: '.25em',color:'#00d1b2' }}></i>
          About Me
        </Link>
        <Link className="navbar-item" to="/projects">
          <i className="fa fa-briefcase " style={{ marginRight: '.25em',color:'#f26522' }}></i>
          Projects
        </Link>
        <Link className="navbar-item" to="/contact">
          <i className="fa fa-envelope" style={{ marginRight: '.25em',color:'#ffd257' }}></i>
          Contact</Link>
        <a className="navbar-item" href="http://moetez.me/resume" target='_blanc'>
          <i className="fa fa-file" style={{ marginRight: '.25em',color:'#ff3860 ' }}></i>
          Resume
        </a>
      </Navbar.Container>
      <Navbar.Container position="end">
        <Navbar.Item href="https://twitter.com/moetezch" target='_blanc'>
          <i className="fa fa-twitter fa-2x" style={{ color: '#55acee' }}></i>
        </Navbar.Item>
        <Navbar.Item href="https://github.com/moetezch" target='_blanc'>
          <i className="fa fa-github fa-2x"></i>
        </Navbar.Item>
        <Navbar.Item href="https://www.linkedin.com/in/moetezch" target='_blanc'>
          <i className="fa fa-linkedin fa-2x" style={{ color: '#4875B4' }}></i>
        </Navbar.Item>
      </Navbar.Container>
    </Navbar.Menu>
  </Navbar>
)

export default Header