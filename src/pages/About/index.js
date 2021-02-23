import React, { } from 'react'
import { useHistory } from 'react-router-dom'
export default function About () {
    let history = useHistory()
    return (
        <div className="about">
            about
            <button onClick={() => { history.push('/') }}>跳转到home</button>
        </div>
    )
}

