import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch, HashRouter } from 'react-router-dom';
import $ from "jquery";

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

   pageAnimate(data) {
      var $window = $(window);

      $window.scrollTop(0);

      $('title').html(data.title);
      $('.content, .mask').css({ 'min-height': $window.height() });
      $('.content').addClass('animated fadeIn');

      $window.resize(() => {
         $('.content, .mask').css({ 'min-height': $window.height() });
      });

      if ($(window).width() > 1024) {
         $('.widget').addClass('animated bounceInUp');
         $('.grid').addClass('animated bounceInUp');
         $('.author').addClass('animated zoomInDown');
         $('.page_title').addClass('animated bounceInDown');
      }
   }


   render() {
      return (
         <HashRouter>
            <Root>
               <Switch>
                  <Route path="/" exact render={(props) => (
                     <Home pageData={data.home} pageAnimate={() => { this.pageAnimate(data.home) }} />
                  )} />
                  <Route path="/resume" render={(props) => (
                     <Resume pageData={data.resume} pageAnimate={() => { this.pageAnimate(data.resume) }} />
                  )} />
                  <Route path="/portfolio" render={(props) => (
                     <Portfolio pageData={data.portfolio} pageAnimate={() => { this.pageAnimate(data.portfolio) }} />
                  )} />
                  <Route path="/testimonials" render={(props) => (
                     <Testimonials pageData={data.testimonials} pageAnimate={() => { this.pageAnimate(data.testimonials) }} />
                  )} />
                  <Route render={(props) => (
                     <Notfound pageData={data.home} pageAnimate={() => { this.pageAnimate(data.home) }} />
                  )} />
               </Switch>
            </Root>
         </HashRouter>
      );
   }
}

ReactDOM.render(<App />, document.getElementById('app'));