import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'
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
    <div className="">
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
