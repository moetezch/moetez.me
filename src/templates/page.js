import React, { Component } from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
class PageTemplate extends Component {
  render() {
    const currentPage = this.props.data.wordpressPage
    return (
      <Layout>
        <div className="container">
          <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
        </div>
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query currentPageQuery($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      slug
      id
      date(formatString: "MMMM DD, YYYY")
    }
    site {
      id
      siteMetadata {
        title
      }
    }
  }
`
