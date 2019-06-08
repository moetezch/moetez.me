import React, { Component } from 'react'
import Img from 'gatsby-image'
import SocialShare from '../components/SocialShare'
import Layout from '../components/Layout'
import { Link, graphql } from 'gatsby'
import SEO from '../components/seo'
import CategoryIcon from '../common/CategoryIcon'
import Prism from 'prismjs'
import '../../node_modules/prismjs/plugins/custom-class/prism-custom-class'
require('prismjs/components/prism-jsx')
require('prismjs/components/prism-scss')
class PostTemplate extends Component {
  componentDidMount() {
    Prism.plugins.customClass.prefix('prism--')
    Prism.highlightAll()
  }
  showCategories(categories) {
    return categories.map(category => category.name)
  }
  renderTags(tags) {
    return tags.map(tag => (
      <span key={tag.name} className="tag is-info">
        {tag.name}
      </span>
    ))
  }
  render() {
    const post = this.props.data.wordpressPost
    let src, tags, cardImage
    if (
      post.featured_media &&
      post.featured_media.localFile &&
      post.featured_media.localFile.childImageSharp
    ) {
      src = post.featured_media.localFile.childImageSharp.fluid
    }
    tags = post.tags.map(tag => tag.name)
    if (src) {
      // .substring(0) removes /
      cardImage = src.src.substring(0)
    }
    return (
      <Layout>
        <SEO
          title={post.title}
          keywords={tags}
          description={post.excerpt.replace(/<(?:.|\n)*?>/gm, '')}
          image={cardImage}
        />
        <div className="content container" id="postContent">
          <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
          <div>
            {' '}
            <small className="has-text-grey">
              {post.date} {'  '}
            </small>
            <Link
              className="has-text-weight-semibold"
              to={`/category/${this.showCategories(
                post.categories
              )[0].toLowerCase()}`}
            >
              <CategoryIcon
                iconName={this.showCategories(post.categories)[0].toLowerCase()}
              />
              {'  '}
              {this.showCategories(post.categories)}
            </Link>
          </div>
          {src && (
            <div>
              <Img fluid={src} style={{ maxWidth: src.presentationWidth }} />
            </div>
          )}
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          <div className="tags are-large">
            <span className="tag is-large">
              <i className="fa fa-tags" aria-hidden="true" />
            </span>
            {this.renderTags(post.tags)}
          </div>
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
      excerpt
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
