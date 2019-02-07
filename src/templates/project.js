import React, { Component } from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
class ProjectTemplate extends Component {
  render() {
    const project = this.props.data.wordpressWpJetpackPortfolio
    let src, tags
    if (project.featured_media) {
      src = project.featured_media.localFile.childImageSharp.fluid
    }
    return (
      <Layout>
        <SEO title={project.title} keywords={tags} />
        <div className="content has-text-centered container">
          <p dangerouslySetInnerHTML={{ __html: project.date }} />
          <h1 dangerouslySetInnerHTML={{ __html: project.title }} />
          {src && (
            <div>
              <Img
                fluid={src}
                style={{
                  maxWidth:
                    project.featured_media.localFile.childImageSharp.fluid
                      .presentationWidth,
                  margin: '0 auto',
                }}
              />
            </div>
          )}
          <div dangerouslySetInnerHTML={{ __html: project.content }} />
        </div>
      </Layout>
    )
  }
}

export default ProjectTemplate

export const projectQuery = graphql`
  query currentProjectQuery($id: String!) {
    wordpressWpJetpackPortfolio(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
      excerpt
      id
      featured_media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
              presentationWidth
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
