import React from 'react'
import "./top.styl"

export default class Top extends React.Component {
  render () {
    return (
      <div className="top">
        <div className="left">
          <img src="https://img2.epetbar.com/nowater/2017-12/20/15/38688d8d92c7da7aae64eda8b8bb3a94.jpg" alt="" />
        </div>
        <div className="right">
          <a href="" className="more">
            <img src="https://img2.epetbar.com/nowater/2017-12/20/15/0855ecf27a6ca47b32170caab2503ddd.jpg" alt="" />
          </a>
        </div>
      </div>
    )
  }
}

