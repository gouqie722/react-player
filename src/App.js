import React, { Suspense, useRef, useLayoutEffect  } from "react";
import "./App.css";
import "./App.less";
import routes from "./router/index";
import store, { setAudio } from './store/index.js'
import { HashRouter as BrowserRouter, Switch, Route } from "react-router-dom";
// import { Router } from 'react-router'
// import { createBrowserHistory } from 'history'
function Loading() {
  // return <></>
  return (
    <div className="loading">
      loading....
      {/* <img
        src="https://img.lanrentuku.com/img/allimg/1212/5-121204193R0-50.gif"
        alt=""
      /> */}
    </div>
  );
}
// import Home from './pages/Home/index'
// import About from './pages/About/index'
// import User from './pages/User/index'
// import NoMatch from './pages/NoMatch/index'
// https://juejin.cn/post/6844903856489365518
// const Home = lazy(() => import('./pages/Home/index'))
// const About = lazy(() => import('./pages/About/index'))
// const User = lazy(() => import('./pages/User/index'))
// const NoMatch = lazy(() => import('./pages/NoMatch/index'))
// const history = createBrowserHistory()
// console.log(routes);
function getRouters(routes, basePath) {
  if (!Array.isArray(routes)) {
    return null;
  }
  var rs = routes.map((rt, i) => {
    const { children, name, path, component: Component, ...rest } = rt;
    let newPath = `${basePath}${path}`;
    newPath = newPath.replace(/\/\//g, "/");
    return (
      <Route
        key={i}
        {...rest}
        path={newPath}
        render={(values) => {
          return (
            <Component {...values}>{getRouters(rt.children, newPath)}</Component>
          );
        }}
      />
    );
  });
  return <Switch>{rs}</Switch>
}
var routerArr = getRouters(routes, '/')
// console.log(getRouters(routes, '/'))
function App() {
  const audioEle = useRef(null)
  useLayoutEffect(() => {
    console.log(audioEle)
    store.dispatch(setAudio(audioEle.current))
    console.log(store.getState())
  })
  // return <Router history={history}>
  //     <nav>
  //       <ul>
  //         <li>
  //           <Link to="/">Home</Link>
  //         </li>
  //         <li>
  //           <Link to="/about">about</Link>
  //         </li>
  //         <li>
  //           <Link to="/user">user</Link>
  //         </li>
  //       </ul>
  //     </nav>
  //     <Switch>
  //       <Route exact path="/">
  //         <Home />
  //       </Route>
  //       <Route path="/about">
  //         <About />
  //       </Route>
  //       <Route path="/user/:id">
  //         <User />
  //       </Route>
  //       <Route>
  //         <NoMatch />
  //       </Route>
  //     </Switch>
  // </Router>
  // let routerArr = []
  // let routerArr = routes.filter(item => !item.hidden).map((item, index) => {
  //   return (<li key={index}>
  //     <Link to={item.path}>{item.meta.title}</Link>
  //   </li>)
  // })
  // console.log(routerArr)
  // let RouterComponent = routes.map((el, index) => {
  //   let ele = !el.children ? (<Route exact component={el.component} path={el.path} key={index} className="item">
  //     { el.redirect ? <Redirect to={el.path}></Redirect> : false}
  //   </Route>) : (
  //     <Route exact component={el.component} path={el.path} key={index} className="item">
  //       <ul>
  //         {el.children.map(item => (<Route path={el.path + item.path}>
  //           {item.name}
  //         </Route>))}
  //       </ul>
  //     </Route>
  //   )
  //   return ele
  // })
  // console.log(RouterComponent)
  return (
    <BrowserRouter>
      <div className="app">
        <header className="mm-header">
          <h1>
            <a href="">react-player 音乐播放器</a>
          </h1>
          <div className="user">
            登录
          </div>
        </header>
        {/* <nav>
          <ul> */}
            {/* {routerArr} */}
            {/* <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/user/12">user</Link>
            </li> */}
          {/* </ul>
        </nav> */}
        <Suspense fallback={<Loading />}>
          {/* <Switch> */}
          {/* {RouterComponent} */}
          {/* </Switch> */}
          {routerArr}
        </Suspense>
        <audio ref={audioEle}></audio>
      </div>
    </BrowserRouter>
  );
}

// 文档
// http://www.ruanyifeng.com/blog/2016/05/react_router.html
// https://reactrouter.com/web/example/recursive-paths
// http://react-router.docschina.org/web/guides/philosophy
// http://www.fjzikao.net/fjzkzcgg/50916.html // 2021开考课程

// {/* <Suspense fallback={<Loading />}>
//           <Switch>
//             <Route exact path="/" component={Home} >
//               {/* <Home></Home> */}
//             </Route>
//             <Route path="/about" exact component={About}>
//               {/* <About></About> */}
//             </Route>
//             <Route path="/user/:id" exact component={User}>
//               {/* <User></User> */}
//             </Route>
//             <Route path="/home" exact>
//               <Redirect to="/"></Redirect>{/** 重定向 */}
//             </Route>
//             <Route path="*" exact component={NoMatch} /> { /** 匹配不到，则展示404 */}
//           </Switch>
//         </Suspense> */}
export default App;
