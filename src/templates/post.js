import React, { Component } from 'react'
import Img from 'gatsby-image'
import SocialShare from '../components/SocialShare'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost
    let src
    if (post.featured_media) {
      src = post.featured_media.localFile.childImageSharp.fluid
      console.log(
        post.featured_media.localFile.childImageSharp.fluid.presentationWidth
      )
    }
    return (
      <Layout>
        <div className="content has-text-centered container">
          <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
          {src && (
            <div>
              <Img
                fluid={src}
                style={{
                  maxWidth:
                    post.featured_media.localFile.childImageSharp.fluid
                      .presentationWidth,
                  margin: '0 auto',
                }}
              />
            </div>
          )}
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          <div>
            <SocialShare
              title={this.props.data.wordpressPost.title}
              url={
                this.props.data.site.siteMetadata.siteUrl +
                this.props.location.pathname
              }
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query currentPostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
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
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
  }
`
