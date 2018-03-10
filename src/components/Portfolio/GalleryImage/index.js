import React from 'react'
import Img from 'gatsby-image';

class GalleryImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: !props.clickHandler,
      isGif: !props.image.fileName.childImageSharp
    }
  }

  render() {
    const { image, clickHandler } = this.props
    let gifPath, imageElement, imageSizes;

    if (this.state.isGif) {
      gifPath = require(`@src/img/${image.fileName.relativePath}`)
    } else {
      imageSizes = image.fileName.childImageSharp.sizes
    }

    if (this.state.isExpanded) {
      if (this.state.isGif) {
        imageElement = <img src={gifPath} />
      } else {
        imageElement =
          <Img
            imgStyle={{ display: 'block', height: 'auto', position: 'relative', top: '50%', width: 'auto' }}
            sizes={imageSizes}
          />
      }
      return (imageElement)
    } else {
      if (this.state.isGif) {
        imageElement = <img className="gif" src={gifPath} />
      } else {
        imageElement = <Img sizes={imageSizes} style={{ overflow: 'visible' }} alt={image.title} />
      }

      return (
        <div onClick={clickHandler.bind(this, image)}>
          {imageElement}
        </div>
      )
    }
  }
}

export default GalleryImage
