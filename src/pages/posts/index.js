import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Layout from '../../components/Layout'
import SEO from '../../components/seo'
class PostsTemplate extends Component {
  showCategories(categories) {
    return categories.map(category => category.name)
  }
  render() {
    const posts = this.props.data.allWordpressPost
    return (
      <Layout>
        <SEO title={'Posts'} />
        <div className="has-text-centered container">
          {posts.edges.map(({ node }) => (
            <div
              key={node.slug}
              className={'post'}
              style={{ marginBottom: '2rem', borderBottom: '1px solid' }}
            >
              <Link to={'/post/' + node.slug} style={{ color: 'black' }}>
                <h3>{node.title}</h3>
              </Link>
              <small className="has-text-grey">
                {node.date} - In{' '}
                <Link
                  to={`/category/${this.showCategories(
                    node.categories
                  )[0].toLowerCase()}`}
                >
                  {this.showCategories(node.categories)}
                </Link>
              </small>
              <Link to={'/post/' + node.slug}>
                {node.featured_media &&
                  node.featured_media.localFile &&
                  node.featured_media.localFile.childImageSharp.fluid && (
                    <Img
                      fluid={
                        node.featured_media.localFile.childImageSharp.fluid
                      }
                      style={{
                        maxWidth:
                          node.featured_media.localFile.childImageSharp.fluid
                            .presentationWidth,
                        margin: '0 auto',
                      }}
                    />
                  )}
              </Link>
              <div
                dangerouslySetInnerHTML={{ __html: node.excerpt.slice(0, 150) }}
                style={{ marginBottom: '1.5rem' }}
              />
            </div>
          ))}
        </div>
      </Layout>
    )
  }
}

PostsTemplate.propTypes = {
  edges: PropTypes.array,
}

export default PostsTemplate

export const pageQuery = graphql`
  query postsQuery {
    allWordpressPost(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          id
          title
          excerpt
          slug
          date(formatString: "MMMM DD, YYYY")
          categories {
            name
          }
          featured_media {
            localFile {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                  presentationWidth
                }
              }
            }
          }
        }
      }
    }
  }
`
