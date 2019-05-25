import React, { Component } from 'react'
import { Link } from 'gatsby'
import { Navbar } from 'react-bulma-components'
import darkImage from '../images/site-light-logo.png'
import lightImage from '../images/site-dark-logo.png'
import DarkLightSwitch from './DarkLighSwitch'

class Header extends Component {
  state = { open: false, logo: darkImage }
  componentDidMount() {
    const theme = localStorage.getItem('theme')
    const logoImage = theme === 'light' ? darkImage : lightImage
    this.setState({ logo: logoImage })
  }
  handleThemeSwitch(theme) {
    const logoImage = theme === 'light' ? darkImage : lightImage
    this.setState({ logo: logoImage })
  }
  render() {
    return (
      <Navbar transparent active={this.state.open}>
        <Navbar.Brand>
          <Link to="/" className="navbar-item">
            <img src={this.state.logo} alt="Moetez Chaabene" height="64" />
          </Link>
          <Navbar.Burger
            active={this.state.open}
            onClick={() => this.setState({ open: !this.state.open })}
            aria-label="menu"
          />
        </Navbar.Brand>
        <Navbar.Menu onClick={() => this.setState({ open: !this.state.open })}>
          <Navbar.Container>
            <Link
              className="navbar-item"
              style={{ color: 'inherit' }}
              to="/about"
              activeClassName="is-active"
            >
              <i
                className="fa fa-user fa-lg"
                style={{ marginRight: '.25em', color: '#00d1b2' }}
              />
              About Me
            </Link>
            <Link
              className="navbar-item"
              style={{ color: 'inherit' }}
              to="/posts"
              activeClassName="is-active"
            >
              <i
                className="fa fa-book"
                style={{ marginRight: '.25em', color: '#0BB5FF' }}
              />
              Blog
            </Link>
            <Link
              className="navbar-item"
              style={{ color: 'inherit' }}
              to="/projects"
              activeClassName="is-active"
            >
              <i
                className="fa fa-briefcase"
                style={{ marginRight: '.25em', color: '#f26522' }}
              />
              Projects
            </Link>
            <Link
              className="navbar-item"
              style={{ color: 'inherit' }}
              to="/contact"
              activeClassName="is-active"
            >
              <i
                className="fa fa-envelope"
                style={{ marginRight: '.25em', color: '#ffd257' }}
              />
              Contact
            </Link>
          </Navbar.Container>
          <Navbar.Container position="end">
            <Navbar.Item>
              <DarkLightSwitch
                handleThemeSwitch={this.handleThemeSwitch.bind(this)}
              />
            </Navbar.Item>
            <Navbar.Item href="https://twitter.com/moetezch" target="_blanc">
              <i className="fa fa-twitter fa-2x" style={{ color: '#55acee' }} />
            </Navbar.Item>
            <Navbar.Item href="https://github.com/moetezch" target="_blanc">
              <i className="fa fa-github fa-2x" style={{ color: '#4a4a4a' }} />
            </Navbar.Item>
            <Navbar.Item
              href="https://www.linkedin.com/in/moetezch"
              target="_blanc"
            >
              <i
                className="fa fa-linkedin fa-2x"
                style={{ color: '#4875B4' }}
              />
            </Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    )
  }
}

export default Header
