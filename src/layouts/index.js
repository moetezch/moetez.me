import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
//import './index.css'
import './index.scss'
import 'font-awesome/css/font-awesome.min.css';

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.SiteTitleQuery.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.SiteTitleQuery.siteMetadata.title} />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
    <Footer/>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    SiteTitleQuery :site {
      siteMetadata {
        title
      }
    }
  

    LayoutQuery:  allWordpressWpApiMenusMenusItems{
        edges{
            node{
                id
                name
                items{
                    title
                    url
                    object_slug
                }
            }
        }
    }
  }
`
