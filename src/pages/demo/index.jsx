import React from 'react'
import './index.less'
import { useHistory } from 'react-router-dom'
export default function Demo() {
  const history = useHistory()
  return (
    <div className="demo" onClick={() => {
      history.push('/music/playList')
    }}>
      demo
    </div>
  )
}
