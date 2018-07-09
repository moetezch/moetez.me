import React, { Component } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

class PostTemplate extends Component {
    render() {
        const post = this.props.data.wordpressPost
        let resolutions
        if (post.featured_media) {
            resolutions = post.featured_media.localFile.childImageSharp.resolutions
        }        return (
            <div className="content has-text-centered container">
                <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
                {resolutions &&
                    <div>
                        <Img resolutions={resolutions}/>
                      
                    </div>
}
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
        )
    }
}


export default PostTemplate

export const pageQuery = graphql`
query currentPostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
        title
        content
        featured_media{
            localFile{
                childImageSharp{
                    resolutions{
                        src
                        width
                        height
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