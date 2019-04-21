import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
export default function Card({ post }) {
  return (
    <div className="column is-one-third modal-button">
      <Link to={'/post/' + post.slug}>
        <div className="card is-shady">
          <div className="card-image">
            <figure className="image ">
              {post.featured_media &&
                post.featured_media.localFile &&
                post.featured_media.localFile.childImageSharp.fluid && (
                  <Img
                    classNameName="modal-button"
                    fluid={post.featured_media.localFile.childImageSharp.fluid}
                    style={{
                      maxWidth:
                        post.featured_media.localFile.childImageSharp.fluid
                          .presentationWidth,
                      margin: '0 auto',
                      height: '360px',
                      width: '410px',
                    }}
                  />
                )}
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              <h4>{post.title}</h4>
              <p
                dangerouslySetInnerHTML={{
                  __html: post.excerpt.slice(0, 150),
                }}
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
