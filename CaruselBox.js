import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import news1 from '../assets/news1.jpg'
import news2 from '../assets/news2.jpg'
import news3 from '../assets/news3.jpg'

export default class CaruselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" id="slide" src={news1} alt="news1" />
          <Carousel.Caption>
            <h3>News article1</h3>
            <p>Тут будет полезная инфа попозже</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" id="slide" src={news2} alt="news2" />
          <Carousel.Caption>
            <h3>News article2</h3>
            <p>Тут тоже будет полезная инфа попозже</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" id="slide" src={news3} alt="news1" />
          <Carousel.Caption>
            <h3>News article3</h3>
            <p>Тут тоже тоже будет полезная инфа попозже</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}
