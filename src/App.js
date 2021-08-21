import React from 'react'
import Navbar from "./components/Navbar"
import Home from './pages/Home'
import Careers from './pages/Careers'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

export default function App() {
  return (
    <div className="App">
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/careers">
                    <Careers/>
                </Route>
            </Switch>
        </Router>
    </div>
)
}
