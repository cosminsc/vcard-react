import React from "react";
import $ from "jquery";
import Isotope from "isotope-layout";
import ImagesLoaded from "imagesloaded";
import lightbox2 from "lightbox2";

export default class Portfolio extends React.Component {

   constructor(props){
      super(props);

      this.state = {
         pageTitle: 'Some Of My Works'
      }
   }

   componentWillMount() {
      $(window).scrollTop(0);

      var wH = $(window).height();
      $('.content').css({ height: wH });
   }

   componentDidMount() {
      document.title = this.state.pageTitle;

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
      $('.grid').addClass('animated bounceInUp');
      $('.headline').addClass('animated bounceInDown');
   }

   render() {
      return (
         <div className="content" style={{ backgroundImage: "url(/images/bg/bg-portfolio.jpg)" }}>
            <div className="mask">
               <div className="container">
                  <div className="headline">{this.state.pageTitle}</div>
                  <ul className="grid">
                     <li className="grid__item grid__item--portfolio">
                        <a href="/images/portfolio/weblenis.png" data-lightbox="portfolio">
                           <img className="grid_image" src="/images/portfolio/weblenis-310x413.png" />
                        </a>
                        <div className="grid__content grid__content--portfolio">
                           <ul className="labels">
                              <li className="labels__item">Graphic Layout Design</li>
                              <li className="labels__item">Logo Design</li>
                              <li className="labels__item">Ad Banners Design</li>
                           </ul>
                        </div>
                     </li>
                     <li className="grid__item grid__item--portfolio">
                        <a href="/images/portfolio/infopagina.jpg" data-lightbox="portfolio">
                           <img className="grid_image" src="/images/portfolio/infopagina-310x310.jpg" />
                        </a>
                        <div className="grid__content grid__content--portfolio">
                           <ul className="labels">
                              <li className="labels__item">Graphic Layout Design</li>
                              <li className="labels__item">Logo Design</li>
                           </ul>
                        </div>
                     </li>
                     <li className="grid__item grid__item--portfolio">
                        <a href="/images/portfolio/bearWallowEvents.jpeg" data-lightbox="portfolio">
                           <img className="grid_image" src="/images/portfolio/bearWallowEvents-310x260.jpeg" />
                        </a>
                        <div className="grid__content grid__content--portfolio">
                           <ul className="labels">
                              <li className="labels__item">Website Design</li>
                              <li className="labels__item">HTML/CSS</li>
                              <li className="labels__item">Wordpress</li>
                           </ul>
                        </div>
                     </li>
                     <li className="grid__item grid__item--portfolio">
                        <a href="/images/portfolio/lotsOfHead.png" data-lightbox="portfolio">
                           <img className="grid_image" src="/images/portfolio/lotsOfHead-310x441.png" />
                        </a>
                        <div className="grid__content grid__content--portfolio">
                           <ul className="labels">
                              <li className="labels__item">HTML/CSS</li>
                              <li className="labels__item">Logo Design</li>
                              <li className="labels__item">Wordpress</li>
                           </ul>
                        </div>
                     </li>
                     <li className="grid__item grid__item--portfolio">
                        <a href="/images/portfolio/weightLoss.png" data-lightbox="portfolio">
                           <img className="grid_image" src="/images/portfolio/weightLoss-310x594.png" />
                        </a>
                        <div className="grid__content grid__content--portfolio">
                           <ul className="labels">
                              <li className="labels__item">Website Design</li>
                              <li className="labels__item">e-Book Design</li>
                              <li className="labels__item">HTML/CSS</li>
                              <li className="labels__item">Wordpress</li>
                              <li className="labels__item">Sales Page</li>
                           </ul>
                        </div>
                     </li>
                     <li className="grid__item grid__item--portfolio">
                        <a href="/images/portfolio/bookAuthor.jpg" data-lightbox="portfolio">
                           <img className="grid_image" src="/images/portfolio/bookAuthor-310x372.jpg" />
                        </a>
                        <div className="grid__content grid__content--portfolio">
                           <ul className="labels">
                              <li className="labels__item">Website Design</li>
                              <li className="labels__item">HTML/CSS</li>
                              <li className="labels__item">Wordpress</li>
                              <li className="labels__item">Content Writing</li>
                              <li className="labels__item">Aweber Integration</li>
                           </ul>
                        </div>
                     </li>
                     <li className="grid__item grid__item--portfolio">
                        <a href="/images/portfolio/homebrewvideos.png" data-lightbox="portfolio">
                           <img className="grid_image" src="/images/portfolio/homebrewvideos-310x398.png" />
                        </a>
                        <div className="grid__content grid__content--portfolio">
                           <ul className="labels">
                              <li className="labels__item">Website Design</li>
                              <li className="labels__item">Logo Design</li>
                              <li className="labels__item">e-Book Design</li>
                              <li className="labels__item">HTML/CSS</li>
                              <li className="labels__item">Wordpress</li>
                              <li className="labels__item">Sales Page</li>
                           </ul>
                        </div>
                     </li>
                     <li className="grid__item grid__item--portfolio">
                        <a href="/images/portfolio/alifelessanxious.jpg" data-lightbox="portfolio">
                           <img className="grid_image" src="/images/portfolio/alifelessanxious-310x492.jpg" />
                        </a>
                        <div className="grid__content grid__content--portfolio">
                           <ul className="labels">
                              <li className="labels__item">Website Design</li>
                              <li className="labels__item">Logo Design</li>
                              <li className="labels__item">e-Book Design</li>
                              <li className="labels__item">HTML/CSS</li>
                              <li className="labels__item">Wordpress</li>
                              <li className="labels__item">Sales Page</li>
                           </ul>
                        </div>
                     </li>
                     <li className="grid__item grid__item--portfolio">
                        <a href="/images/portfolio/corechiro.png" data-lightbox="portfolio">
                           <img className="grid_image" src="/images/portfolio/corechiro-310x284.png" />
                        </a>
                        <div className="grid__content grid__content--portfolio">
                           <ul className="labels">
                              <li className="labels__item">HTML/CSS</li>
                              <li className="labels__item">Wordpress</li>
                           </ul>
                        </div>
                     </li>
                     <li className="grid__item grid__item--portfolio">
                        <a href="/images/portfolio/greenbusiness.jpg" data-lightbox="portfolio">
                           <img className="grid_image" src="/images/portfolio/greenbusiness-310x455.jpg" />
                        </a>
                        <div className="grid__content grid__content--portfolio">
                           <ul className="labels">
                              <li className="labels__item">Graphic Layout Design</li>
                           </ul>
                        </div>
                     </li>
                     <li className="grid__item grid__item--portfolio">
                        <a href="/images/portfolio/realEstate.jpg" data-lightbox="portfolio">
                           <img className="grid_image" src="/images/portfolio/realEstate-310x413.jpg" />
                        </a>
                        <div className="grid__content grid__content--portfolio">
                           <ul className="labels">
                              <li className="labels__item">Graphic Layout Design</li>
                           </ul>
                        </div>
                     </li>
                     <li className="grid__item grid__item--portfolio">
                        <a href="/images/portfolio/wikiGames.jpg" data-lightbox="portfolio">
                           <img className="grid_image" src="/images/portfolio/wikiGames-310x269.jpg" />
                        </a>
                        <div className="grid__content grid__content--portfolio">
                           <ul className="labels">
                              <li className="labels__item">Graphic Layout Design</li>
                           </ul>
                        </div>
                     </li>
                     <li className="grid__item grid__item--portfolio">
                        <a href="/images/portfolio/lyon.png" data-lightbox="portfolio">
                           <img className="grid_image" src="/images/portfolio/lyon-310x401.png" />
                        </a>
                        <div className="grid__content grid__content--portfolio">
                           <ul className="labels">
                              <li className="labels__item">Print Design</li>
                           </ul>
                        </div>
                     </li>
                     <li className="grid__item grid__item--portfolio">
                        <a href="/images/portfolio/diChistina.jpg" data-lightbox="portfolio">
                           <img className="grid_image" src="/images/portfolio/diChistina-310x432.jpg" />
                        </a>
                        <div className="grid__content grid__content--portfolio">
                           <ul className="labels">
                              <li className="labels__item">Print Design</li>
                           </ul>
                        </div>
                     </li>
                     <li className="grid__item grid__item--portfolio">
                        <a href="/images/portfolio/fitSpace.jpg" data-lightbox="portfolio">
                           <img className="grid_image" src="/images/portfolio/fitSpace-310x114.jpg" />
                        </a>
                        <div className="grid__content grid__content--portfolio">
                           <ul className="labels">
                              <li className="labels__item">Graphic Design</li>
                           </ul>
                        </div>
                     </li>
                     <li className="grid__item grid__item--portfolio">
                        <a href="/images/portfolio/clothing.jpg" data-lightbox="portfolio">
                           <img className="grid_image" src="/images/portfolio/clothing-310x114.jpg" />
                        </a>
                        <div className="grid__content grid__content--portfolio">
                           <ul className="labels">
                              <li className="labels__item">Graphic Design</li>
                           </ul>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      );
   }
}