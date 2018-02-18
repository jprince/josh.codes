import React from 'react'
import Grid from 'material-ui/Grid'
import Icon from 'material-ui/Icon';
import Modal from 'material-ui/Modal';
import Slider from 'react-slick'

import ProjectDetails from './ProjectDetails'
import {projects} from './projects'

import './index.scss'

const CarouselArrow = (props) => (
  <Icon
    className={props.direction}
    onClick={props.onClick}
  >
    {props.direction === 'next' ? 'navigate_next' : 'navigate_before'}
  </Icon>
)

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: {
        image: null,
        open: false
      },
      selectedProject: projects[0]
    };
  }

  // Workaround to fix bug where first slide loads with width: 0 upon refresh
  // https://github.com/akiran/react-slick/pull/1011
  componentDidMount() {
    setTimeout(() => { window.dispatchEvent(new Event('resize')) }, 0);
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
      selectedProject: projects[slideIndex],
    });
  };

  render() {
    const settings = {
      adaptiveHeight: true,
      afterChange: this.handleSlideChange,
      dots: true,
      infinite: true,
      nextArrow: <CarouselArrow direction="next" />,
      prevArrow: <CarouselArrow direction="prev" />,
    }

    return (
      <div className="portfolio">
        <Slider {...settings}>
          {projects.map(project => (
            <img key={project.name} src={project.images[0].img} />
          ))}
        </Slider>

        <ProjectDetails selectedProject={this.state.selectedProject} />

        <Grid container className="project-gallery" spacing={24}>
          {this.state.selectedProject.images.map(image => (
            <Grid item xs={6} key={image.img}>
              <img src={image.img} alt={image.title} onClick={this.handleOpen.bind(this, image.img)} />
            </Grid>
          ))}
        </Grid>

        <Modal open={this.state.modal.open} onClose={this.handleClose} classes={{root: 'image-showcase-modal'}}>
          <div className="image-showcase" onClick={this.handleClose}>
            <img src={this.state.modal.image} />
          </div>
        </Modal>
      </div>
    )
  }
}

export default Portfolio
