import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
export default function Card({ node, type }) {
  return (
    <div className="column is-one-third modal-button">
      <Link to={`/${type}/${node.slug}`}>
        <div className="card is-shady">
          <div className="card-image">
            <figure className="image ">
              {node.featured_media &&
                node.featured_media.localFile &&
                node.featured_media.localFile.childImageSharp.fluid && (
                  <Img
                    className="modal-button"
                    fluid={node.featured_media.localFile.childImageSharp.fluid}
                    style={{
                      maxWidth:
                        node.featured_media.localFile.childImageSharp.fluid
                          .presentationWidth,
                      margin: '0 auto',
                      height: '360px',
                    }}
                  />
                )}
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              <h4>{node.title}</h4>
              <p
                style={{ color: '#222' }}
                dangerouslySetInnerHTML={{
                  __html: node.excerpt.replace(/<(?:.|\n)*?>/gm, ''),
                }}
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
