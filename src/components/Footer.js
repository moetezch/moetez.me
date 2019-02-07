import React from 'react'

const Footer = () => (
  <div style={{ marginTop: '100px' }}>
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          Built with{' '}
          <span role="img" aria-label="love" style={{ color: '#8B0000' }}>
            ❤️
          </span>{' '}
          using <a href="https://www.gatsbyjs.org/">Gatsby</a>.
          <br />
          View the source code on{' '}
          <a href="https://github.com/moetezch/moetez.me">Github</a>.
        </p>
      </div>
    </footer>
  </div>
)

export default Footer
