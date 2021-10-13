import React from 'react';
import AppLayout from "./Components/AppLayout";
import AdminPanel from './Components/AdminPanel';
import TableMasks from './Components/TableMasks';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import './App.css';

function App() {
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/admin">Admin</Link>
              </li>
              <li>
                <Link to="/edit">Table</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/admin">
              <AdminPanel />
            </Route>
            <Route path="/edit">
              <TableMasks />
            </Route>
            <Route path="/">
              <AppLayout />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
