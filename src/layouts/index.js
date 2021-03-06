import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '@src/common/theme'

import ContactForm from '@src/components/ContactForm'
import Footer from '@src/components/Footer'
import Header from '@src/components/Header'
import './index.scss'

class TemplateWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { location, children, data } = this.props;

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
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          <MuiThemeProvider theme={theme}>
            {children()}
          </MuiThemeProvider>
        </div>
        <MuiThemeProvider theme={theme}>
          <ContactForm />
        </MuiThemeProvider>
        <Footer images={data} />
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
