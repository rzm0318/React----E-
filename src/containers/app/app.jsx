
import React from 'react'

import {Route, Switch,NavLink} from 'react-router-dom'
import "./app.styl"
import HomePage from '../homepage/homepage'
import Classify from '../classify/classify'
import Profile from '../profile/profile'
import Cart from '../cart/cart'

import "../../../src/assets/reset.css"
export default class App extends React.Component {
  render () {
    return (
      <div>
        <footer className="footer_guide border-1px" >
          <NavLink to="/homepage" className="guide_item">
            <span className="item_icon">
              <i className="iconfont icon-shouyedianpujishishangcheng"></i>
            </span>
            <span>首页</span>
          </NavLink>
          <NavLink to="/classify" className="guide_item">
            <span className="item_icon">
              <i className="iconfont icon-fenlei"></i>
            </span>
            <span>分类</span>
          </NavLink>
          <NavLink to="/cart" className="guide_item" >
            <span className="item_icon">
              <i className="iconfont icon-gouwuche"></i>
            </span>
            <span>购物车</span>
          </NavLink>
          <NavLink to="/profile" className="guide_item" >
            <span className="item_icon">
              <i className="iconfont icon-xiaolian-"></i>
            </span>
            <span>我的E宠</span>
          </NavLink>
        </footer>
        <Switch>
          <Route path="/classify" component={Classify} />
          <Route path="/cart" component={Cart} />
          <Route path="/profile" component={Profile} />
          <Route component={HomePage} />
          {/*方法二： <Route path="/homepage" component={HomePage} /> <Redirect to="/homepage"/>*/}
        </Switch>
      </div>
    )
  }
}




