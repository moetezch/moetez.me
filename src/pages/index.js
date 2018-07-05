import React from 'react'
import Link from 'gatsby-link'



const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>

    <section className="hero">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">
          Hero title
        </h1>
        <h2 className="subtitle">
          Hero subtitle
        </h2>
      </div>
    </div>
  </section>
  </div>
)

export default IndexPage
