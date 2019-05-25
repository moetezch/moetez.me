import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import Card from '../common/card'
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
          <div style={{ marginBottom: '5rem' }} className="hero">
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
          <h3>Latest articles</h3>
          <div className="">
            <div className="columns features">
              {posts.edges.map(({ node }) => (
                <Card node={node} key={node.slug} type="post" />
              ))}
            </div>
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
