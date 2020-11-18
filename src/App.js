import React from 'react'
import './App.css';
import './App.less'
import { 
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Home from './pages/Home/index'
import About from './pages/About/index'
import User from './pages/user/index'
import NoMatch from './pages/NoMatch/index'
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/user">user</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/user/:id">
            <User></User>
          </Route>
          <Route component={NoMatch} /> { /** 匹配不到，则展示404 */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

// 文档
// http://www.ruanyifeng.com/blog/2016/05/react_router.html
// https://reactrouter.com/web/example/recursive-paths


export default App;
