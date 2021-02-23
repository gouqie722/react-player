import React from 'react'
import './musicList.less'

export default function MusicList(props) {
  console.log(props)
  let list = new Array(2)
  console.log(list)
  return (
    <div className="musicList">
      <div className="list-item list-header">
        <span className="list-name">歌曲</span>
        <span className="list-artist">歌手</span>
        <span className="list-time">时长</span>
      </div>
      <div className="list-content">
        { list.map(item => (
          <div className="list-item" key={item}>
            <span className="list-num">1</span>
            <div className="list-name">
              <span>
                演员
              </span>
              <i className="hover iconfont icon-play-mini" style={{
                fontSize: '40px'
              }}></i>
            </div>
            <span className="list-artist">薛之谦</span>
            <span className="list-time">
              <span>3: 04</span>
              <i className="hover list-menu-icon-del iconfont icon-delete-mini" style={{
                fontSize: "40px"
              }}></i>
            </span>
          </div>
        )) }
      </div>
    </div>
  )
}
