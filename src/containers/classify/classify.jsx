/*
 分类页面的路由组件
 */
import React from 'react'

import {Route,NavLink,Switch} from 'react-router-dom'
import List from "./List/List"
import Brand from "./Brand/Brand"
import "./classify.styl"
export default class Classify extends React.Component {
  render () {
    return (
      <div>
        <div className="tab">
          <div className="tab-item1">
            <NavLink to="/classify/list" className="title" replace >
              分类
            </NavLink>
          </div>
          <div className="tab-item2">
            <NavLink to="/classify/brand" className="title"  replace>
              品牌
            </NavLink>
          </div>
          <div className="search">
            <img src="//static.epetbar.com/static_web/wap/src/images/background/search-ico.png" />
          </div>
        </div>
        <Switch>
          <Route path="/classify/brand" component={Brand} />
          <Route path="/classify/list" component={List} />
          <Route component={Brand}/>
        </Switch>
      </div>
    )
  }
}
