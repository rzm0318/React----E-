import React from 'react'
import BScroll from 'better-scroll'
import "./list.styl"
export default class Brand extends React.Component {
  render () {
    return (
      <div>
        <div className="cList">
          <div className="left">
            <ul className="left-wrap">
              <li>名称2</li>
              <li>名称2</li>
              <li>名称2</li>
              <li>名称2</li>
              <li>名称2</li>
            </ul>
          </div>
          <div className="right" v-if="classify.categorys">
            <div className="right-wrap" >
              <span>名字</span>
              <div className="right-img">
                <ul>
                  <li >
                    <div>
                      <img />
                    </div>
                    <div className="img-name">fff</div>
                  </li>
                  <li >
                    <div>
                      <img />
                    </div>
                    <div className="img-name">fff</div>
                  </li>
                  <li >
                    <div>
                      <img />
                    </div>
                    <div className="img-name">fff</div>
                  </li>
                  <li >
                    <div>
                      <img />
                    </div>
                    <div className="img-name">fff</div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right-wrap" >
              <span>名字</span>
              <div className="right-img">
                <ul>
                  <li >
                    <div>
                      <img />
                    </div>
                    <div className="img-name">fff</div>
                  </li>
                  <li >
                    <div>
                      <img />
                    </div>
                    <div className="img-name">fff</div>
                  </li>
                  <li >
                    <div>
                      <img />
                    </div>
                    <div className="img-name">fff</div>
                  </li>
                  <li >
                    <div>
                      <img />
                    </div>
                    <div className="img-name">fff</div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right-wrap" >
              <span>名字</span>
              <div className="right-img">
                <ul>
                  <li >
                    <div>
                      <img />
                    </div>
                    <div className="img-name">fff</div>
                  </li>
                  <li >
                    <div>
                      <img />
                    </div>
                    <div className="img-name">fff</div>
                  </li>
                  <li >
                    <div>
                      <img />
                    </div>
                    <div className="img-name">fff</div>
                  </li>
                  <li >
                    <div>
                      <img />
                    </div>
                    <div className="img-name">fff</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  componentDidMount(){
    new BScroll('.left', {
      click: true,
    })
  }
}

