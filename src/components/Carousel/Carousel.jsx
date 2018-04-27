import React from 'react'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import "./carousel.styl"

export default class Carousel extends React.Component {



  render () {
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {/* carousel data 1 value  =》 carousel.data[1].value */}
          <div className="swiper-slide" >
            <img src="https://img2.epetbar.com/nowater/2018-04/24/18/e2ee17732bbb8e0b2362ef892e576be3.png@!water" alt=""/>
          </div>
          <div className="swiper-slide" >
            <img src="https://img2.epetbar.com/nowater/2018-04/24/19/4d26aed3d3467871aaa20997c6b26373.jpg@!water" alt="" />
          </div>
          <div className="swiper-slide" >
            <img src="https://img2.epetbar.com/nowater/2018-04/25/18/1dac17a88661da7b9e261fcb1f631f27.jpg@!water" alt="" />
          </div>
          <div className="swiper-slide" >
            <img src="https://img2.epetbar.com/nowater/2018-04/22/19/a73ddaeb850d26dd501112869d73c07c.jpg@!water" alt="" />
          </div>
          <div className="swiper-slide" >
            <img src="https://img2.epetbar.com/nowater/2018-04/25/09/bb74b1de0fad4f0cea9582e6592c6147.jpg@!water" alt="" />
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    )
  }
  componentDidMount(){
    new Swiper(".swiper-container",{
      autoplay:true,
      loop:true,
      pagination: {
        el: '.swiper-pagination',
      }
    })
  }
}
