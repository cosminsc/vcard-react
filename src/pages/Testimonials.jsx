import React from "react";
import $ from "jquery";
import Isotope from "isotope-layout";

export default class Testimonials extends React.Component{

   constructor(props){
      super(props);

      this.state = {
         pageTitle: 'What Do Clients Say?'
      }
   }

   componentWillMount() {
      $(window).scrollTop(0);
   }

   componentDidMount() {
      document.title = this.state.pageTitle;

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
      $('.grid').addClass('animated bounceInUp');
      $('.headline').addClass('animated bounceInDown');

      $('body').addClass('testimonial-page');
   }

   render(){
      return(
         <div className="content" style={{backgroundImage: "url(/images/bg/bg-testimonials.jpg)"}}>
            <div className="mask">
               <div className="container">
                  <div className="headline">{this.state.pageTitle}</div>
                  <ul className="grid">
                     <li className="grid__item">
                        <div className="grid__title">Evelien van der Geest (Netherlands) says:</div>
                        <div className="grid__content">
                           Pleasant and good freelancer to work with. Communication and deliverables within time. Communication via Trello worked well. Quality of code very good (almost no bugs). Overall, pleasant cooperation!
                        </div>
                     </li>
                     <li className="grid__item">
                        <div className="grid__title">Jon Traister (United States) says:</div>
                        <div className="grid__content">
                           Cosmin Schiopu did an amazing job. I will use his services again.
                        </div>
                     </li>
                     <li className="grid__item">
                        <div className="grid__title">Adrian Harrison (Australia) says:</div>
                        <div className="grid__content">
                           Great design skills. Gets job done on time and has great English!
                        </div>
                     </li>
                     <li className="grid__item">
                        <div className="grid__title">Frank van Driel (Netherlands) says:</div>
                        <div className="grid__content">
                           Cosmin is great! He is good and always available if you need him! 24/7
                        </div>
                     </li>
                     <li className="grid__item">
                        <div className="grid__title">Helen Tonetti (United Kingdom) says:</div>
                        <div className="grid__content">
                           I saw all the great feedback and thought I would give Cosmin a try, I am so glad I did, I will be back again and again. Great design, and he added his slant.
                        </div>
                     </li>
                     <li className="grid__item">
                        <div className="grid__title">Nancy (United States) says:</div>
                        <div className="grid__content">
                           Cosmin was a pleasure to work with. He provided many design options, was always available, offered help more than expected. Will work with him again.
                        </div>
                     </li>
                     <li className="grid__item">
                        <div className="grid__title">Steve Pavilanis (United States) says:</div>
                        <div className="grid__content">
                           Cosmin is simply amazing! Incredibly talented designer and hard worker. I hired him because he took the initiative to send me a mockup of a design I needed before I even formally hired him. His attention to detail and ability to follow my often confusing directions and turn around the work very quickly makes him a superstar! I have already hired him for other projects and he will be my go-to designer for all future projects. 
                        </div>
                     </li>
                     <li className="grid__item">
                        <div className="grid__title">Vinay Nair (India) says:</div>
                        <div className="grid__content">
                           Cosmin is one of the best designers I've worked with. Not only is his design skills excellent but his way of working is also very professional. All my emails were answered promptly. Cosmin was also quick to understand my requirements. He was also very cooperative when I requested any changes. All in all, a gem of a contractor. I recommend him highly!
                        </div>
                     </li>
                     <li className="grid__item">
                        <div className="grid__title">Jayson Thompson (United States) says:</div>
                        <div className="grid__content">
                           Cosmin does a great job. We communicate regularly and I am always impressed with the work. If you choose him, you will get exactly what you want and better. Thanks
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      );
   }
}