/*
 分类页面的路由组件
 */
import React  from 'react'
import CartHeader from "../../components/CartHeader/CartHeader"
import "./cart.styl"
export default class Cart extends React.Component {
  render () {
    return (
      <div>
        {/*头部*/}
        <CartHeader/>
        <div className="bg-img">
          <div className="xuebi"></div>
          <div className="space">购物车是空的</div>
          <div className="font">
            <a className="stroll">去逛逛</a>
            <a className="collection">我的收藏</a>
          </div>
        </div>
      </div>
    )
  }
}
