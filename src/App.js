import React, {Component} from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Careers from './pages/Careers'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div className="App">
                <Router>
                    <Navbar/>
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/">
                            <Redirect to="/"/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
