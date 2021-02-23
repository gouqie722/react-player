import React, { } from 'react'
import { useHistory, useLocation, Redirect } from 'react-router-dom'
// import Btn from './btn'
export default function Home (props) {
    console.log(props)
    const history = useHistory() // 编程式路由跳转
    let location = useLocation() // useLocation钩子返回表示当前URL的location对象。您可以将其看作是一个useState，每当URL更改时返回新位置。
    // function handleToUser () {
    //     history.push('/about')
    // }
    // console.log(location)
    return <div className="home">
        {/* home
        <button onClick={handleToUser}>跳转到about</button> */}
        {/* topList */}
        <Redirect to="/music/playList"></Redirect>
    </div>
}
