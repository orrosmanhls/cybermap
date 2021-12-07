import React, {Component} from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Page404 from "./pages/404";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/">
              <Page404 />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
