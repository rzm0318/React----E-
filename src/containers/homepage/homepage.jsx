/*
 主页面的路由组件
 */
import React from 'react'
import axios from 'axios'
import "./home.styl"
import Carousel from "../../components/Carousel/Carousel"
import Slide from "../../components/Slide/slide"
import Small from "../../components/Small/small"
import Top from "../../components/Top/Top"
import Video from "../../components/Video/Video"
export default class HomePage extends React.Component {
    state = {
      menus:[],
    }

  componentWillMount() {   //
    axios.get('/newindex')
      .then(res => {
        const menus = res.data.data.navigation;
        this.setState({menus});
      });
  }

  render () {
    let menus = this.state.menus
    console.log(menus);
    if(!menus){
      menus:[]
    }
    return (
        <div>
          <div className="container">
            <div className="header">
              {/* <!--关闭广告-->*/}
              <div className="ad">
                <div className="close">
                  <img src="http://static.epetbar.com/static_wap/lib/common_images/closebtn_03.png" alt="xiaoimg"/>
                </div>
                <div className="ad-img" v-if="isShow" alt="xiaoimg">
                  <a href="">
                    <img src="https://img2.epetbar.com/nowater/2017-12/13/18/c63b6e6cf483cbb61196f658920a9d6e.jpg@!water" alt="xiaoming"/>
                  </a>
                </div>
              </div>
              {/* <!--顶部-->*/}
              <div className="headSearch">
                <div className="animal">
                  <span className="dog">狗狗</span>
                  <span className="middle">|</span>
                  <span className="add">重庆</span>
                  <span className="icon">
            <i className="iconfont icon-xiaosanjiao"></i>
        </span>
                </div>
                <div className="search">
                  <input type="text" placeholder="搜索商品和品牌"/>
                  <span className="icon">
                <i className="iconfont icon-sousuo"></i>
              </span>
                </div>
                <img src="http://static.epetbar.com/static_web/wap/src/images/mydope.png"/>
              </div>
            </div>
            <div className="content">
              {/*导航*/}
              <Slide/>
              {/*轮播*/}
              <Carousel/>
              {/*分类图标*/}
              <div className="icon-wrapper">
                <ul className="icon-child" v-if="adlist.datas">
                  {
                    menus.map((menu,index)=>{
                      return  <li key={index}>
                        <img src={menu.image} all=""/>
                      </li>
                    })
                  }

                </ul>
              </div>
              {/*新人专享*/}
              <div className="advertisement" v-if="carousel.data">
                <a href="##">
                  <img src={require("./images/sy_1.jpg")}/>
                </a>
              </div>
              {/*每人疯抢*/}
              <div className="content_m">
                <div className="content_m_t">
                  <div className="content_m_t_l">

                    <img src={require("./images/msite_9.jpg")} alt=""/>
                  </div>
                  <div className="content_m_t_r">
                    <span>下一场开始</span>
                    <span className="bor">20</span>
                    <span>:</span>
                    <span className="bor">00</span>
                    <img src="https://img2.epetbar.com/nowater/2018-02/02/12/80acfffe2d91b341fd2c8de903b3eace.png"/>
                  </div>
                </div>
                <div className="content_m_b" v-if="carousel.data">
                  <ul>
                    <li>
                      <a href="##">
                        {/* src = {require("./images/msiter_9.jpg")}*/}
                        <img src={require("./images/shouye_6.jpg")} alt=""/>
                        <span>￥20</span>
                        <p>40</p>
                      </a>
                    </li>
                    <li>
                      <a href="##">
                        {/* src = {require("./images/msiter_9.jpg")}*/}
                        <img src={require("./images/shouye_6.jpg")} alt=""/>
                        <span>￥20</span>
                        <p>40</p>
                      </a>
                    </li>
                    <li>
                      <a href="##">
                        {/* src = {require("./images/msiter_9.jpg")}*/}
                        <img src={require("./images/shouye_6.jpg")} alt=""/>
                        <span>￥20</span>
                        <p>40</p>
                      </a>
                    </li>
                    <li>
                      <a href="##">
                        {/* src = {require("./images/msiter_9.jpg")}*/}
                        <img src={require("./images/shouye_6.jpg")} alt=""/>
                        <span>￥20</span>
                        <p>40</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/*小条*/}
              <Small/>
              {/*E宠国际*/}
              <div className="abroad">
                <div className="abroadL" v-if="adlist.datas">
                  <a href="">
                    <img
                      src="https://img2.epetbar.com/nowater/2017-12/13/09/1ec9379f83eb421db9a09195c9594e29.jpg@!water"/>
                  </a>
                </div>
                <div className="abroadR" v-if="adlist.datas">
                  <a href="">
                    <img
                      src="https://img2.epetbar.com/nowater/2017-12/13/10/35bb7f3bd146cb9a9e74a935803f0d9a.jpg@!water"/>
                  </a>
                  <a href="">
                    <img
                      src="https://img2.epetbar.com/nowater/2017-12/19/13/62a49af47aa7f713fc0ac0c9b9657e33.jpg@!water"/>
                  </a>
                </div>
              </div>
              {/*小条*/}
              <Small/>
              {/*E秒团*/}
              <div className="rob" v-if="adlist.datas">
                <img src="https://img1.epetbar.com/2018-04/25/09/76d4351905a120bcf5c0034a66b7d0f3.jpg@!water"/>
              </div>
              {/*小条*/}
              <Small/>
              {/*潮品视频*/}
              <Top/>
              <Video/>
              <Small/>
              {/*爱宠+转盘+服务+体验*/}
              <div className="happy">
                <div className="happy-top">
                  <a href="##">
                    <img
                      src="https://img2.epetbar.com/nowater/2018-02/05/14/fa66a0c8437b6fb8137c58d9b6ccb1c6.jpg@!water"/>
                  </a>
                  <a href="##">
                    <img
                      src="https://img2.epetbar.com/nowater/2018-02/05/14/6e3a2cb186e1028d481940c42fb54732.jpg@!water"/>
                  </a>
                </div>
                <div className="happy-bottom">
                  <a href="##">
                    <img
                      src="https://img2.epetbar.com/nowater/2018-02/05/14/fa66a0c8437b6fb8137c58d9b6ccb1c6.jpg@!water"/>
                  </a>
                  <a href="##">
                    <img
                      src="https://img2.epetbar.com/nowater/2018-02/05/14/6e3a2cb186e1028d481940c42fb54732.jpg@!water"/>
                  </a>
                </div>
              </div>
              {/*小条*/}
              <Small/>
              {/*品牌特卖*/}
              <Top/>
              {/*炒螺丝头部*/}
              <ul className="brand">
                <li>
                  <a href="##">
                    <img
                      src="https://img2.epetbar.com/nowater/2018-04/16/10/34f6b8bc182992fc023ad668722d45f6.jpg@!water"/>
                  </a>
                </li>
                <li>
                  <a href="##">
                    <img
                      src="https://img2.epetbar.com/nowater/2018-04/08/17/f8ca8574f04ec0fa7edc2ebe9e081404.jpg@!water"/>
                  </a>
                </li>
                <li>
                  <a href="##">
                    <img
                      src="https://img2.epetbar.com/nowater/2018-04/04/10/6afbf23c23988b13756a03aa85e14577.jpg@!water"/>
                  </a>
                </li>
                <li>
                  <a href="##">
                    <img
                      src="https://img2.epetbar.com/nowater/2018-04/13/18/36eb67688bfa43de21c492e2c7444d62.jpg@!water"/>
                  </a>
                </li>

              </ul>
              <Small/>
              {/*小剧场*/}
              <Top/>
              <Video/>
              <div className="content-over">
                <img src="https://img2.epetbar.com/nowater/2017-12/13/11/be84f01e893b0e631d8512566eb79117.jpg@!water"/>
              </div>
            </div>
            <div className="footer">
              <div className="first">
                <span>触屏版</span>
                <a>手机客户端</a>
                <a>关于我们</a>
                <a>联系我们</a>
              </div>
              <div className="second">
                © wap.epet.com 版权：重庆易宠科技有限公司
              </div>
            </div>
          </div>
        </div>

      )
    }
  }

