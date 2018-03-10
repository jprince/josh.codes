import React from 'react'
import Grid from 'material-ui/Grid'
import Img from 'gatsby-image';
import Modal from 'material-ui/Modal';

import GalleryImage from './GalleryImage'
import ProjectDetails from './ProjectDetails'
import Slider from './Slider'

import './index.scss'

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: {
        image: null,
        open: false
      },
      selectedProject: props.projects[0].node
    };
  }

  handleClose = () => {
    this.setState({
      modal: {
        image: null,
        open: false
      }
    });
  };

  handleOpen = (image) => {
    this.setState({
      modal: {
        image: image,
        open: true
      }
    });
  };

  handleSlideChange = (slideIndex) => {
    this.setState({
      selectedProject: this.props.projects[slideIndex].node,
    });
  };

  render() {
    const { projects } = this.props

    const sliderImages = projects.map(project => (
      <Img
        imgStyle={{ objectPosition: 'top center' }}
        key={project.node.name}
        sizes={project.node.galleryImage.childImageSharp.sizes}
      />
    ))

    return (
      <div className="portfolio">
        <Slider afterSlideCallback={this.handleSlideChange}>
          {sliderImages}
        </Slider>

        <ProjectDetails selectedProject={this.state.selectedProject} />

        <Grid container className="project-gallery" spacing={24}>
          {this.state.selectedProject.images.map(image => (
            <Grid item xs={6} key={image.fileName.relativePath}>
              <GalleryImage image={image} clickHandler={this.handleOpen} />
            </Grid>
          ))}
        </Grid>

        <Modal open={this.state.modal.open} onClose={this.handleClose} classes={{root: 'image-showcase-modal'}}>
          <div className="image-showcase" onClick={this.handleClose}>
            <GalleryImage image={this.state.modal.image} />
          </div>
        </Modal>
      </div>
    )
  }
}

export default Portfolio
