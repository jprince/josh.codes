import React from 'react'
import Grid from 'material-ui/Grid';
import Img from 'gatsby-image';

import './index.scss'

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { images } = this.props;

    return (
      <footer>
        <Grid container>
          <Grid item xs={10}>
            Josh Prince &nbsp; |
            &nbsp; Austin, TX &nbsp; |
            &nbsp; <a href="mailto:josh@jprince.codes">josh@jprince.codes</a> &nbsp; |
            &nbsp; 978.331.0801
          </Grid>
          <Grid
            item
            xs={2}
            className="right-align footer-social"
            style={{ paddingBottom: '1.3rem', paddingRight: '0', paddingTop: '1.3rem' }}
          >
            <a href="https://github.com/jprince" target="_blank" rel="noopener">
              <Img resolutions={images.githubLogo.resolutions} />
            </a>
            <a href="https://linkedin.com/in/joshprince" target="_blank" rel="noopener">
              <Img resolutions={images.linkedinLogo.resolutions} />
            </a>
          </Grid>
        </Grid>
      </footer>
    )
  }
}

export default Footer
