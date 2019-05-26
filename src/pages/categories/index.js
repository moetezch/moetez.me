import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../../components/Layout'
import SEO from '../../components/seo'
class CategoriesTemplate extends Component {
  showCategories(posts) {
    return posts.map(({ node }) => {
      return node.categories.map(category => (
        <Link key={category.id} to={`/category/${category.slug}`}>
          <h1>
            {category.name} ({category.count})
          </h1>
        </Link>
      ))
    })
  }
  render() {
    const posts = this.props.data.allWordpressPost
    return (
      <Layout>
        <SEO title={'Categories'} />
        <div className="has-text-centered container">
          {this.showCategories(posts.edges)}
        </div>
      </Layout>
    )
  }
}

CategoriesTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default CategoriesTemplate

export const pageQuery = graphql`
  query categoriesQuery {
    allWordpressPost(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          id
          categories {
            id
            name
            count
            slug
          }
        }
      }
    }
  }
`
