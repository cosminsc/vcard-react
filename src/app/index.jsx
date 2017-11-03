import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch, HashRouter } from 'react-router-dom';

import Root from "./components/Root";
import Header from "./components/Header";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Testimonials from "./pages/Testimonials";
import Notfound from "./pages/Notfound";

import "./styles/style.scss";

class App extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Router>
                <Root>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/portfolio" component={Portfolio} />
                        <Route path="/testimonials" component={Testimonials} />
                        <Route component={Notfound} />
                    </Switch>
                </Root>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));