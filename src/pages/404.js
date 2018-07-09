import React from 'react'
import Link from 'gatsby-link'
import image from "../images/zoro.gif"
const NotFoundPage = () => (
  <div className="content container is-medium has-text-centered">
    <h1>404 NOT FOUND</h1>
    <p>Ooops... It looks that you are lost</p>
    <img src={image} alt="lost" style={{ width: '500px'}}/>
  <br/>
    <Link className="button is-primary" to="/">
      <i className="fa fa-user fa-arrow-left" style={{ marginRight: '.25em'}}></i>
       Back to Homepage
    </Link>
  </div>
)

export default NotFoundPage
