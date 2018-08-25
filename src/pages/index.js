import React from 'react'
import Link from 'gatsby-link'

const BlogPost = ({ node }) => {
  return (
    <li>
      <img src={node.featureImage.resolutions.src} />
      <Link style={{ display: 'block' }} to={node.slug}>{node.title}</Link>
      <div>{node.content.childMarkdownRemark.excerpt}</div>
    </li>
  )
}

const IndexPage = ({ data }) => (
  <ul className='blog-post'>
    {data.allContentfulBlog.edges.map(edge => (
      <BlogPost node={edge.node} />
    ))}
  </ul>
)

export default IndexPage

export const pageQuery = graphql`
  query pageQuery {
    allContentfulBlog (
      filter: {
        node_locale: { eq: "en-US" }
      },
      sort: {
        fields: [publishDate], order: ASC
      }
    ) {
      edges {
        node {
          slug
          title
          content {
            childMarkdownRemark {
              excerpt
            }
          }
          featureImage {
            resolutions(width: 300, height: 300) {
              src
            }
          }
        }
      }
    }
  }
`