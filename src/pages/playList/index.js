import React, { useState } from 'react'
import './index.less'
import MusicList from '../music/MusicList.jsx'
export default function PlayList() {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);
  return (<>
    <MusicList list={[1,2,3,4]}></MusicList>
  </>)
  // return (
  //   <div className="playList" onClick={() => {
  //     setCount(count +1)
  //   }}>
  //     <MusicList list={[1,2,3,4]}></MusicList>
  //   </div>
  // )
}
