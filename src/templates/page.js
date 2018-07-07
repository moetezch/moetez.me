import React, {Component} from "react"

class PageTemplate extends Component {
    render() {

        const currentPage = this.props.data.wordpressPage
        return (
            <div className="container">
                <div dangerouslySetInnerHTML={{__html: currentPage.content}}/>
            </div>
        )
    }
}

export default PageTemplate

export const pageQuery = graphql`
    query currentPageQuery($id: String!) {
        wordpressPage(id: { eq: $id }) {
            title
            content
            slug
            id
            date(formatString: "MMMM DD, YYYY")
        }
        site {
            id
            siteMetadata {
                title
                subtitle
            }
        }
    }
`