import React, { Component } from 'react'

import './index.less'
import { NavLink, useHistory } from 'react-router-dom'
export default function Music(props)  {
  let bg = 'https://netease-music.fe-mm.com/img/bg-1.cf743e29.jpg'
  console.log('music ======>',props)
  const history = useHistory()
  return (
    <div className="music">
      <div className="music-content">
        <div className="music-left">
          <div className="music-btn">
            {/* <a onClick={() => { history.push('/music/playList') }}>正在播放</a>
            <a onClick={() => { history.push('/music/topList') }}>推荐</a>
            <a onClick={() => { history.push('/music/search') }}>搜索</a>
            <a onClick={() => { history.push('/music/userList') }}>我的歌曲</a>
            <a onClick={() => { history.push('/music/historyList') }}>我听过的</a> */}
            <NavLink to="/music/playList">正在播放</NavLink>
            <NavLink to="/music/topList">推荐</NavLink>
            <NavLink to="/music/search">搜索</NavLink>
            <NavLink to="/music/userList">我的歌曲</NavLink>
            <NavLink to="/music/historyList">我听过的</NavLink>
          </div>
          <div className="music-list">
            { props.children }
          </div>
        </div>
        <div className="music-right">
          lrc
        </div>
      </div>
      <div className="music-bar">

      </div>
      <div className="player-bg" style={{
        backgroundImage: `url(${bg})`
      }}></div>
      <div className="player-mask"></div>
    </div>
  )
}
