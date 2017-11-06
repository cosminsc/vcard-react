import React from "react";
import $ from "jquery";
import Isotope from "isotope-layout";
import ImagesLoaded from "imagesloaded";
import lightbox2 from "lightbox2";

import Projects from "../components/Projects";

const data = require('../data.json');

export default class Portfolio extends React.Component {

   componentWillMount() {
      $(window).scrollTop(0);

      var wH = $(window).height();
      $('.content').css({ height: wH });
   }

   componentDidMount() {
      document.title = data.portfolio.title;

      new ImagesLoaded('.grid', () => {
         new Isotope('.grid', {
            itemSelector: '.grid__item',
            // layoutMode: 'masonry',
            masonry: {
               gutter: 18
               // isFitWidth: true
            }
         });
      });

      var wH = $(window).height();
      $('.content, .mask').css({ 'min-height': wH });

      $('.content').addClass('animated fadeIn');

      if($(window).width() > 1024){
         $('.grid').addClass('animated bounceInUp');
         $('.page_title').addClass('animated bounceInDown');
      }
   }

   render() {
      return (
         <div className="content" style={{ backgroundImage: "url(/images/bg/bg-portfolio.jpg)" }}>
            <div className="mask">
               <div className="container">
                  <div className="page_title">{data.portfolio.title}</div>
                  <Projects list={data.portfolio.list} />
               </div>
            </div>
         </div>
      );
   }
}