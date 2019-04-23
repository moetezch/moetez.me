import React, { Component } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../../components/Layout'
import SEO from '../../components/seo'
import Card from '../../common/card'
class ProjectsTemplate extends Component {
  renderCard() {
    const data = this.props.data
    return data.allWordpressWpJetpackPortfolio.edges.map(({ node }) => (
      <Card node={node} key={node.slug} type="project" />
    ))
  }
  render() {
    return (
      <Layout>
        <SEO title={'Projects'} />
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
