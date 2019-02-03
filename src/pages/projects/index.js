import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Layout from '../../components/Layout'
class ProjectsTemplate extends Component {
  renderCard() {
    const data = this.props.data
    return data.allWordpressWpJetpackPortfolio.edges.map(({ node }) => (
      <div className="column is-one-third" key={node.slug}>
        <Link to={'/project/' + node.slug}>
          <div className="card ">
            <div className="card-image">
              <figure className="image">
                {node.featured_media &&
                  node.featured_media.localFile.childImageSharp.sizes && (
                    <Img
                      sizes={
                        node.featured_media.localFile.childImageSharp.sizes
                      }
                    />
                  )}
              </figure>
              <div className="media-content has-text-centered">
                <p className="title is-4">{node.title}</p>
                <p className="subtitle is-6">
                  <time>{node.date}</time>
                </p>
              </div>
            </div>
            <div className="card-content">
              <div className="content">
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            </div>
          </div>
        </Link>
      </div>
    ))
  }
  render() {
    return (
      <Layout>
        <div className=" has-text-centered container is-fluid ">
          <div className="columns is-multiline">{this.renderCard()}</div>
        </div>
      </Layout>
    )
  }
}

ProjectsTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default ProjectsTemplate

export const pageQuery = graphql`
  query projectsQuery {
    allWordpressWpJetpackPortfolio(sort: { fields: [date], order: DESC }) {
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
                sizes(maxWidth: 350, maxHeight: 300) {
                  src
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`
