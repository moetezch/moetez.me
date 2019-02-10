import React, { Component } from 'react'
import Img from 'gatsby-image'
import SocialShare from '../components/SocialShare'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
class PostTemplate extends Component {
  showCategories(categories) {
    return categories.map(category => category.name)
  }
  render() {
    const post = this.props.data.wordpressPost
    let src, tags
    if (post.featured_media) {
      src = post.featured_media.localFile.childImageSharp.fluid
    }
    tags = post.tags.map(tag => tag.name)

    return (
      <Layout>
        <SEO title={post.title} keywords={tags} />
        <div className="content has-text-centered container">
          <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
          <small className="has-text-grey">
            {post.date} - In {this.showCategories(post.categories)}
          </small>
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
      tags {
        name
      }
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
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
  }
`
