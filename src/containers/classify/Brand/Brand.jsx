import React from 'react'

import "./brand.styl"
export default class Brand extends React.Component {
  render () {
    return (
      <div>
        <div className="brand-wrap" v-if=" brand.brand">
          <div className="cBrand" >
            <div className="title"> ----推荐品牌----  </div>
            <div className="wrap">
              <ul className="brand-img">
                <li>
                  <img />
                  <div className="name">亚冠</div>
                  <div className="address">美国</div>
                </li>
              </ul>
            </div>
          </div>
          <div className="cBrand" >
            <div className="title"> ----推荐品牌----  </div>
            <div className="wrap">
              <ul className="brand-img">
                <li>
                  <img />
                    <div className="name">亚冠</div>
                    <div className="address">美国</div>
                </li>
              </ul>
            </div>
          </div>
          <div className="cBrand" >
            <div className="title"> ----推荐品牌----  </div>
            <div className="wrap">
              <ul className="brand-img">
                <li>
                  <img />
                    <div className="name">亚冠</div>
                    <div className="address">美国</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="circle">全部</div>
      </div>
    )
  }
}

