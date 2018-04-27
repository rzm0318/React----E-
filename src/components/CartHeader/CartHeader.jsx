import React  from 'react'
import "./cartheader.styl"
export default class CartHeader extends React.Component {
  render () {
    return (
      <div className="wrap">
        <div className="cartHeader">
          <i className="iconfont icon-back" ></i>
          <div>购物车</div>
          <i className="iconfont icon-quanbu-copy" ></i>
        </div>
        {/* <div className="whole" v-show="Show" 组件外包裹样式没效果> */}
        <div >
          <ul className="nav-bar border-bottom-1px" v-show="isShow">
            <li className="nav-item" >
              <i className="iconfont icon-shouye"></i>
              <span className="desc-text">首页</span>
            </li>
            <li className="nav-item" >
              <i className="iconfont icon-caidan"></i>
              <span className="desc-text">商品分类</span>
            </li>
            <li className="nav-item" >
              <i className="iconfont icon-unie62d"></i>
              <span className="desc-text">购物车</span>
            </li>
            <li className="nav-item" >
              <i className="iconfont icon-gerenzhongxin"></i>
              <span className="desc-text">我的E宠</span>
            </li>
          </ul>
        </div>
      </div>

    )
  }
}

