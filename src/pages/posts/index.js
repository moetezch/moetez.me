import React, { Component } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Layout from '../../components/Layout'
class PostsTemplate extends Component {
  render() {
    const data = this.props.data

    return (
      <Layout>
        <div className="has-text-centered container">
          {data.allWordpressPost.edges.map(({ node }) => (
            <div
              key={node.slug}
              className={'post'}
              style={{ marginBottom: '2rem', borderBottom: '1px solid' }}
            >
              <Link to={'/post/' + node.slug} style={{ color: 'black' }}>
                <h3>{node.title}</h3>
                <small className="has-text-grey-light">{node.date}</small>
                {node.featured_media &&
                  node.featured_media.localFile.childImageSharp.resolutions && (
                    <Img
                      resolutions={
                        node.featured_media.localFile.childImageSharp
                          .resolutions
                      }
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
  data: PropTypes.object.isRequired,
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
          featured_media {
            localFile {
              childImageSharp {
                resolutions(width: 500, height: 200) {
                  src
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
  }
`
