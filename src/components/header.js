import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (

  <nav>
  <div className="nav-wrapper blue">
    <Link to='/' className="brand-logo">Moetez</Link>
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li><Link to="/">About</Link></li>
      <li><Link to="/posts">Posts</Link></li>
      <li><Link to="/projects">Projects</Link></li>
    </ul>
  </div>
</nav>

  
)

export default Header


/*

<div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>

    </div>

  </div>
*/