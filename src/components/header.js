import React from 'react'
import Link from 'gatsby-link'
import { Navbar } from 'react-bulma-components';

const Header = ({ siteTitle }) => (
  
  <Navbar>
    <Navbar.Brand>
      <Link to="/" className="navbar-item">
       
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7CmrsCeNTLuW8nUYDec9fivR6m-XREyhz33nCckN9UAsgohUy"
            alt="Moetez Chaabene"
            width="150"
            height="150"
          />
      </Link>
      <Navbar.Burger />
    </Navbar.Brand>
    <Navbar.Menu>
      <Navbar.Container>

        <Link className="navbar-item" to="/about"> About</Link>
        <Link className="navbar-item" to="/projects"> Projects</Link>
        <Link className="navbar-item" to="/contact"> Contact</Link>
        <a className="navbar-item" href="http://moetez.me/resume" target='_blanc'> Resume</a>
      </Navbar.Container>
      <Navbar.Container position="end">
      <Navbar.Item href="https://twitter.com/moetezch" target='_blanc'>
      <i className="fa fa-twitter fa-2x" style={{color:'#55acee'}}></i>
      </Navbar.Item>
      <Navbar.Item href="https://github.com/moetezch" target='_blanc'>
      <i className="fa fa-github fa-2x"></i>
      </Navbar.Item>
      <Navbar.Item href="https://www.linkedin.com/in/moetezch" target='_blanc'>
      <i className="fa fa-linkedin fa-2x" style={{color:'#4875B4'}}></i>
      </Navbar.Item>
      </Navbar.Container>
    </Navbar.Menu>
  </Navbar>
)

export default Header