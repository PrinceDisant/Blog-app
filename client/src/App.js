import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Settings from './pages/settings/Settings';
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  const user = false;
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">
          {user? <Home /> : <Login />}
        </Route>
        <Route path="/signup">
          {user? <Home /> : <Signup />}
        </Route>
        <Route path="/settings">
          {user? <Settings /> : <Signup />}
        </Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
        <Route path="/write">
          {user? <Write /> : <Signup />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
