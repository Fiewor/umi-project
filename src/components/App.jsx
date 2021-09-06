import React from "react"
import UsersPage from "../../src/pages/UsersPage"
import UserPage from "../../src/pages/UserPage"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">Umi React Assignment</header>
        {
          <Switch>
            <Route exact path="/" component={UsersPage}/>
            <Route path="/user" component={UserPage}/>
            <Redirect to="/" />
          </Switch>
        }
      </div>
    </Router>
  );
}

export default App;
