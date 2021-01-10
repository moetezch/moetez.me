import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import image from '../images/zoro.gif'
import SEO from '../components/seo'
const NotFoundPage = () => (
  <Layout>
    <SEO title={'404 not found'} />
    <div className="content container is-medium has-text-centered">
      <h1>404 NOT FOUND</h1>
      <p>Ooops... It looks that you are losts</p>
      <img src={image} alt="lost" style={{ width: '500px' }} />
      <br />
      <Link className="button is-primary" to="/">
        <i
          className="fa fa-user fa-arrow-left"
          style={{ marginRight: '.25em' }}
        />
        Back to Homepage
      </Link>
    </div>
  </Layout>
)

export default NotFoundPage
