import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'
import MainMenu from '../components/menu/MainMenu';

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
      <MainMenu menu={data}/>
      {children()}
    </div>
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
