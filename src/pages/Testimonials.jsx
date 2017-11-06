import React from "react";
import $ from "jquery";
import Isotope from "isotope-layout";

import Quotes from "../components/Quotes";

const data = require('../data.json');

export default class Testimonials extends React.Component{

   componentWillMount() {
      $(window).scrollTop(0);
   }

   componentDidMount() {
      document.title = data.testimonials.title;

      new Isotope( '.grid', {
         itemSelector: '.grid__item',
         // layoutMode: 'masonry',
         masonry: {
            gutter: 18
            // isFitWidth: true
         }
      });

      var wH = $(window).height();
      $('.content, .mask').css({'min-height': wH});

      $('.content').addClass('animated fadeIn');

      if($(window).width() > 1024){
         $('.grid').addClass('animated bounceInUp');
         $('.page_title').addClass('animated bounceInDown');
      }
   }

   render(){
      return(
         <div className="content" style={{backgroundImage: "url(/images/bg/bg-testimonials.jpg)"}}>
            <div className="mask">
               <div className="container">
                  <div className="page_title">{data.testimonials.title}</div>
                  <Quotes list={data.testimonials.list}/>
               </div>
            </div>
         </div>
      );
   }
}