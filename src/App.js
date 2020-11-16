import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Home from './pages/Home/index'
import About from './pages/About/index'
import User from './pages/user/index'
function App() {
  return (
    <Router>
      <div>
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
          <Route path="/">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/user">
            <User></User>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}





export default App;
