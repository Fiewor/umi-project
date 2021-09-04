import React from "react"
import Users from "./Users"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom"

import UserPage from "./User"

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">Umi React Assignment</header>
        {
          <Switch>
            <Route exact path="/" component={Users}/>
            <Route path="/user" component={UserPage}/>
            <Redirect to="/" />
          </Switch>
        }
      </div>
    </Router>
  );
}

export default App;
