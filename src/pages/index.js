import React from "react"
import Hero from "../components/hero"
import { graphql } from 'gatsby'


const IndexPage = ({data}) => {
  return( 
    <Hero content={data.hero.edges[0].node}/>
  )
}

export default IndexPage

export const pageQuery = graphql`
  {
    hero: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            greetings
            emoji
            subtitlePrefix
            subtitleHighlight
          }
          rawMarkdownBody
        }
      }
    }
  }
`