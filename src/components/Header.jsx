import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

export default class Header extends React.Component{

   render(){
      return(
         <div className="header">
            <div className="header__avatar">
               <img src="/images/pic_avatar.png" alt="Cosmin Schiopud" />
            </div>
            <div className="header__title">
               <ul className="social">
                  <li className="social__item" title="facebook"><a href="https://www.facebook.com/kosminsc" target="_blank"><i className="fa fa-facebook-square" aria-hidden="true"></i></a></li>
                  <li className="social__item" title="linkedin"><a href="https://www.linkedin.com/in/cosmin-schiopu-35374b113/" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                  <li className="social__item" title="twitter"><a href="https://twitter.com/cosminsch" target="_blank"><i className="fa fa-twitter-square" aria-hidden="true"></i></a></li>
                  <li className="social__item" title="github"><a href="https://github.com/cosminsc" target="_blank"><i className="fa fa-github-square" aria-hidden="true"></i></a></li>
               </ul>
            </div>
            <nav className="header__nav">
               <NavLink to="/" exact className="header__link" activeClassName={"active"}><i className="fa fa-home" aria-hidden="true"></i> Home</NavLink>
               <NavLink to="/resume" className="header__link" activeClassName={"active"}><i className="fa fa-address-card" aria-hidden="true"></i> Resume</NavLink>
               <NavLink to="/portfolio" className="header__link" activeClassName={"active"}><i className="fa fa-th-large" aria-hidden="true"></i> Portfolio</NavLink>
               <NavLink to="/testimonials" className="header__link" activeClassName={"active"}><i className="fa fa-comments" aria-hidden="true"></i> Testimonials</NavLink>
            </nav>
         </div>
      );
   }
}