import React from 'react'

import Portfolio from '@src/components/Portfolio'

const PortfolioPage = ({ data }) => (
  <Portfolio projects={data.allProjectsJson.edges} />
)

export default PortfolioPage

export const query = graphql`
  query ProjectQuery {
    allProjectsJson {
      edges {
        node {
          name
          problem
          solution
          technology
          galleryImage {
            childImageSharp {
              sizes(maxWidth: 960, quality: 100) {
                ...GatsbyImageSharpSizes
              }
            }
          }
          images {
            fileName {
              relativePath
              childImageSharp {
                sizes(maxWidth: 1200, quality: 100) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            title
          }
        }
      }
    }
  }
`;
