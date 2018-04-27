import React from 'react'
import BScroll from 'better-scroll'
import "./slide.styl"

export default class Slide extends React.Component {
  render () {
    return (
        <div className="wrap">
          <ul className="nav">
            <li><a href="" className="active">首页</a></li>
            <li><a href="##">狗狗主粮</a></li>
            <li><a href="##">零食</a></li>
            <li><a href="">医疗保健</a></li>
            <li><a href="">玩具</a></li>
            <li><a href="">外出</a></li>
            <li><a href="">服饰城</a></li>
          </ul>
        </div>

    )
  }
  componentDidMount(){
    new BScroll('.wrap', {
      click: true,
      scrollX: true,
      scrollY: false
    })
  }
}



