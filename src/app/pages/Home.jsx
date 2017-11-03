import React from "react";
import Typed from 'typed.js';
import $ from "jquery";

import About from "./../components/About";
import Skills from "./../components/Skills";

export default class Home extends React.Component{

   componentDidMount() {

      new Typed(".author__position", {
         strings: [
            'I am a Full-Stack Web Developer.',
            'I like challenges!',
            'Any problem has a solution!'
         ],
         loop: true,
         showCursor: false,
         startDelay: 1000,
         backDelay: 2000,
         typeSpeed: 30,
         backSpeed: 20
      });

      $('.author').addClass('animated zoomInDown');
      $('.content').addClass('animated fadeIn');
      $('body').addClass('home-page');
   }

   componentWillUnmount(){
       $('body').removeClass('home-page');
   }

   render(){
      return(
         <div className="content" style={{backgroundImage: "url(/app/images/bg_home.jpg)"}}>
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