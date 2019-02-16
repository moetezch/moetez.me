import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import Img from 'gatsby-image'
class IndexPage extends React.Component {
  showCategories(categories) {
    return categories.map(category => category.name)
  }
  render() {
    const posts = this.props.data.allWordpressPost
    return (
      <Layout>
        <SEO title={'Home'} />
        <div className="has-text-centered container">
          <div
            style={{ marginTop: '5rem', marginBottom: '5rem' }}
            className="hero"
          >
            <p className="is-size-1 bold">
              Hi.{' '}
              <span role="img" aria-label="hands">
                &#x1F44B;
              </span>
            </p>
            <p className="is-size-3">
              I'm{' '}
              <span role="img" aria-label="special m">
                &#x02133;
              </span>
              oetez | Full stack web developer |{' '}
              <span role="img" aria-label="fire">
                &#x1F525;
              </span>{' '}
              React{' '}
              <span role="img" aria-label="light">
                ⚡️
              </span>{' '}
              Node{' '}
              <span role="img" aria-label="fire">
                &#x1F525;
              </span>
            </p>
          </div>
          <h3>Latest Posts</h3>
          <div className="has-text-centered container">
            {posts.edges.map(({ node }) => (
              <div
                key={node.slug}
                className={'post'}
                style={{ marginBottom: '2rem', borderBottom: '1px solid' }}
              >
                <Link to={'/post/' + node.slug} style={{ color: 'black' }}>
                  <h3>{node.title}</h3>
                  <small className="has-text-grey">
                    {node.date} - In {this.showCategories(node.categories)}
                  </small>
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
                  dangerouslySetInnerHTML={{
                    __html: node.excerpt.slice(0, 150),
                  }}
                  style={{ marginBottom: '1.5rem' }}
                />
              </div>
            ))}
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query postsIndexQuery {
    allWordpressPost(sort: { fields: [date], order: DESC }, limit: 3) {
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
