import React from 'react'
import Grid from 'material-ui/Grid';

import './index.scss'

import githubLogo from './github-logo.png'
import linkedinLogo from './linkedin-logo.png'

const Footer = () => (
  <footer>
    <Grid container>
      <Grid item xs={10}>
        Josh Prince &nbsp; |
        &nbsp; Austin, TX &nbsp; |
        &nbsp; <a href="mailto:josh@jprince.codes">josh@jprince.codes</a> &nbsp; |
        &nbsp; 978.331.0801
      </Grid>
      <Grid item xs={2} className="right-align footer-social">
        <a href="https://github.com/jprince" target="_blank" rel="noopener">
          <img src={githubLogo} />
        </a>
        <a href="https://linkedin.com/in/joshprince" target="_blank" rel="noopener">
          <img src={linkedinLogo} />
        </a>
      </Grid>
    </Grid>
  </footer>
);

export default Footer
