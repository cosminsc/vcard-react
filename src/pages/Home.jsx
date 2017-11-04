import React from "react";
import Typed from 'typed.js';
import $ from "jquery";

export default class Home extends React.Component{

   constructor(props){
      super(props);

      this.state = {
         pageTitle: 'Home'
      }
   }

   componentDidMount() {
      document.title = this.state.pageTitle;

      new Typed(".author__position", {
         strings: [
            'I am a Creative Web Developer.',
            'I am passionate about what I do!',
            'I focus on quality not quantity!',
            'I like challenges!'
         ],
         loop: true,
         showCursor: false,
         startDelay: 1000,
         backDelay: 2500,
         typeSpeed: 30,
         backSpeed: 20
      });

      var wH = $(window).height();
      $('.content, .mask').css({'min-height': wH});

      $('.author').addClass('animated zoomInDown');
      $('.content').addClass('animated fadeIn');
      $('body').addClass('home-page');
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