import React from "react";
import Typed from 'typed.js';
import $ from "jquery";

const data = require('../data.json');

export default class Home extends React.Component{

   componentDidMount() {
      document.title = data.home.title;

      new Typed(".author__position", {
         strings: data.home.quotes,
         loop: true,
         showCursor: false,
         startDelay: 1000,
         backDelay: 2200,
         typeSpeed: 25,
         backSpeed: 20
      });

      var wH = $(window).height();
      $('.content, .mask').css({'min-height': wH});

      $('.author').addClass('animated zoomInDown');
      $('.content').addClass('animated fadeIn');
   }

   render(){
      return(
         <div className="content" style={{backgroundImage: "url(/images/bg/bg-home.jpg)"}}>
            <div className="mask">
               <div className="author">
                  <div className="author__name">Hi, I am <span>Cosmin Schiopu</span></div>
                  <div className="author__position"></div>
               </div>
            </div>
         </div>
      );
   }
}