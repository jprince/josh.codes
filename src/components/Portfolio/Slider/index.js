import React from 'react'
import Icon from 'material-ui/Icon';

import './index.scss'

const CarouselArrow = (props) => (
  <Icon
    className={props.direction}
    onClick={props.onClick}
  >
    {props.direction === 'next' ? 'navigate_next' : 'navigate_before'}
  </Icon>
);

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlideIndex: 0
    }
  }

  advanceSlider = (increment) => {
    const maxSlideIndex = this.props.children.length - 1
    let newSlideIndex
    newSlideIndex = this.state.currentSlideIndex + increment

    if (newSlideIndex > maxSlideIndex) {
      newSlideIndex = 0
    } else if (newSlideIndex < 0) {
      newSlideIndex = maxSlideIndex
    }
    this.updateCurrentSlideIndex(newSlideIndex)
  }

  updateCurrentSlideIndex = (newSlideIndex) => {
    this.setState({ currentSlideIndex: newSlideIndex });
    this.props.afterSlideCallback(newSlideIndex)
  }

  render() {
    const slides = this.props.children
    const slideElements = slides.map(slide =>
      (
        <div
          className={`slide ${(slide.key == slides[this.state.currentSlideIndex].key ? '' : 'hidden')}`}
          key={slide.key}
        >
          {slide}
        </div>
      )
    )

    const toggleElements = this.props.children.map((slide, index) =>
      (
        <li
          className={`toggle ${(index == this.state.currentSlideIndex ? 'active' : '')}`}
          key={slide.key}
        >
          <button onClick={this.updateCurrentSlideIndex.bind(this, index)}></button>
        </li>
      )
    )

    return (
      <div>
        <div className="slider">
          {slideElements}
        </div>
        <ul className="slider-toggle">
          <CarouselArrow direction="prev" onClick={this.advanceSlider.bind(this, -1)} />
          {toggleElements}
          <CarouselArrow direction="next" onClick={this.advanceSlider.bind(this, 1)} />
        </ul>
      </div>
    )
  }
}

export default Slider
