import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '@src/common/theme'
import Header from '@src/components/Header'
import './index.scss'

class TemplateWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Helmet
          title="Josh Prince | Design & Development"
          link={[
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:400,500,600,700|Montserrat:300' },
          ]}
        />
        <Header />
        <div
          style={{
            margin: '0 auto',
            padding: '2rem 1.0875rem 1.45rem',
          }}
        >
          <MuiThemeProvider theme={theme}>
            <h4>
              <a href="https://linkedin.com/in/joshprince" target="_blank" rel="noopener">
                LinkedIn
              </a>
            </h4>
          </MuiThemeProvider>
        </div>
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper

export const query = graphql`
  query FooterImgQuery {
    githubLogo: imageSharp(id: { regex: "/github-logo/" }) {
      resolutions(width: 32, height: 32) {
        ...GatsbyImageSharpResolutions
      }
    }
    linkedinLogo: imageSharp(id: { regex: "/linkedin-logo/" }) {
      resolutions(width: 34, height: 34) {
        ...GatsbyImageSharpResolutions
      }
    }
  }
`;
