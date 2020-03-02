import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { routes } from './routes';
import './App.css';

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
              <Link to="/foo">foo</Link>
            </li>
            <li>
              <Link to="/bar">bar</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {routes.map(route => (
            <Route path={route.path} key={route.path}>
              {route.component}
            </Route>
          ))}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
