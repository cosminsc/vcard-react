import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch, HashRouter } from 'react-router-dom';

import Root from "./components/Root";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Testimonials from "./pages/Testimonials";
import Notfound from "./pages/Notfound";

import "./styles/style.scss";

const data = require('./data.json');

class App extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <HashRouter>
                <Root>
                    <Switch>
                        <Route path="/" exact render={(props) => (
                           <Home pageData={data.home} />
                        )} />
                        <Route path="/resume" render={(props) => (
                           <Resume pageData={data.resume} />
                        )} />
                        <Route path="/portfolio" render={(props) => (
                           <Portfolio pageData={data.portfolio} />
                        )} />
                        <Route path="/testimonials" render={(props) => (
                           <Testimonials pageData={data.testimonials} />
                        )} />
                        <Route component={Notfound} />
                    </Switch>
                </Root>
            </HashRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));