import React from 'react'

import Home from '@src/components/Home'

const IndexPage = ({ data }) => (
  <Home images={data} />
)

export default IndexPage

export const query = graphql`
  query HomeImgQuery {
    ahpLogo: imageSharp(id: { regex: "/ahp-logo/" }) {
      resolutions(width: 300, height: 99) {
        ...GatsbyImageSharpResolutions
      }
    }
    analyticsPreview: imageSharp(id: { regex: "/portfolio/arcadia-analytics/home/" }) {
      sizes(maxWidth: 309) {
        ...GatsbyImageSharpSizes
      }
    }
    arcadiaLogo: imageSharp(id: { regex: "/arcadia-logo/" }) {
      resolutions(width: 150, height: 150) {
        ...GatsbyImageSharpResolutions
      }
    }
    buLogo: imageSharp(id: { regex: "/bu-logo/" }) {
      resolutions(width: 220, height: 102) {
        ...GatsbyImageSharpResolutions
      }
    }
    kingsCornerPreview: imageSharp(id: { regex: "/portfolio/kings-corner/entry/" }) {
      sizes(maxWidth: 309) {
        ...GatsbyImageSharpSizes
      }
    }
    skillsChart: imageSharp(id: { regex: "/skills-chart/" }) {
      sizes(maxWidth: 835) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
