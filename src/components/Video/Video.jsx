import React from 'react'
import "./video.styl"

export default class Video extends React.Component {
  render () {
    return (
      <div className="video">
    
        <div className="bottom">
          <img src="https://img1.epetbar.com/2018-04/15/22/822b52d6f9a909d5e427efe9cef5a91e.jpg?x-oss-process=style/waterfall&$1=500" alt="" />
        </div>
        <div className="word_bottom">
          <div className="text-first">SodaPup 易拉罐漏食狗玩具 口感软弹洁牙护牙</div>
          <div className="text-two">
                <span className="icon">
                  <i className="iconfont icon-eye"></i>
                </span>
            <span>9274</span>
            <span className="a-line">|</span>
            <span>01:29</span>
          </div>
        </div>
      </div>
    )
  }
}

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .video
    width 100%

    .bottom
      img
        width:100%;
        height:100%
    .word_bottom
      width 100%
      height 60px
      text-align center
      font-size 12px
      color #999
      .text-first
        padding 10px
      .text-two
        height: 18px
        white-space nowrap
        .a-line
          width 3px
          margin-right 10px
          margin-left 10px
</style>
