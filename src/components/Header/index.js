import React from 'react'
import Link from 'gatsby-link'
import './index.scss'

const Header = () => (
  <header>
    <Link to="/">
      {<span className="font-weight-600">Josh Prince</span>} | Design & Development
    </Link>
  </header>
)

export default Header
