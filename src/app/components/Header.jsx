import React from "react";
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";

export default class Header extends React.Component{

   render(){
      return(
         <div className="header">
            <div className="header__avatar">
               <img src="/app/images/pic_avatar.png" alt="Cosmin Schiopud" />
            </div>
            <div className="header__title">
               <span className="header__author">Cosmin Schiopu</span>
            </div>
            <nav className="header__nav">
               <NavLink to="/" exact className="header__link" activeClassName={"active"}>Home</NavLink>
               <NavLink to="/portfolio" className="header__link" activeClassName={"active"}>Portfolio</NavLink>
               <NavLink to="/testimonials" className="header__link" activeClassName={"active"}>Testimonials</NavLink>
            </nav>
         </div>
      );
   }
}