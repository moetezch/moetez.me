import React, { Component } from "react"
import Link from "gatsby-link"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import FlipMove from 'react-flip-move'

class ProjectsTemplate extends Component {
    
    renderCard() {
        const data = this.props.data
        return (
            data.allWordpressWpJetpackPortfolio.edges.map(({ node }) => (
                <div className="column is-one-third" key={node.slug}>
                    <Link to={'/project/' + node.slug}>
                        <div className="card">
                            <div className="card-image">
                                <figure className="image ">
                                    {node.featured_media && node.featured_media.localFile.childImageSharp.resolutions &&
                                        <Img resolutions={node.featured_media.localFile.childImageSharp.resolutions}></Img>
                                    }
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="content">
                                    <p dangerouslySetInnerHTML={{ __html: node.excerpt }}></p>
                                    <time>{node.date}</time>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            )))
    }
    render() {
        

        return (
            <div className=" has-text-centered container is-fluid ">
            <h1>Projects</h1>
                <div className="columns is-multiline">

                {this.renderCard()}
                
                </div>

            </div>
        )
    }
}

ProjectsTemplate.propTypes = {
    data: PropTypes.object.isRequired,
    edges: PropTypes.array,
}

export default ProjectsTemplate

export const pageQuery = graphql`
    query projectsQuery{
      allWordpressWpJetpackPortfolio{
            edges{
                node{
                    id
                    title
                    excerpt
                    slug
                    date(formatString: "MMMM DD, YYYY")
                    featured_media{
                        localFile{
                            childImageSharp{
                                resolutions(width:500, height: 200){
                                    src
                                    width
                                    height
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`