import React, { Component } from 'react'
import Img from 'gatsby-image'
import SocialShare from '../components/SocialShare'
import Layout from '../components/Layout'
import { Link, graphql } from 'gatsby'
import SEO from '../components/seo'
class PostTemplate extends Component {
  showCategories(categories) {
    return categories.map(category => category.name)
  }
  render() {
    const post = this.props.data.wordpressPost
    let src, tags
    if (
      post.featured_media &&
      post.featured_media.localFile &&
      post.featured_media.localFile.childImageSharp
    ) {
      src = post.featured_media.localFile.childImageSharp.fluid
    }
    tags = post.tags.map(tag => tag.name)

    return (
      <Layout>
        <SEO title={post.title} keywords={tags} />
        <div className="content container" style={{ width: '50%' }}>
          <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
          <div>
            {' '}
            <small className="has-text-grey">
              {post.date} - In{' '}
              <Link
                to={`/category/${this.showCategories(
                  post.categories
                )[0].toLowerCase()}`}
              >
                {this.showCategories(post.categories)}
              </Link>
            </small>
          </div>
          {src && (
            <div>
              <Img
                fluid={src}
                style={{
                  maxWidth:
                    post.featured_media.localFile.childImageSharp.fluid
                      .presentationWidth,
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
