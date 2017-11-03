import React from "react";
import $ from "jquery";
import Isotope from "isotope-layout";
import ImagesLoaded from "imagesloaded";

export default class Portfolio extends React.Component{

   componentDidMount() {

      new ImagesLoaded( '.grid', () => {
         new Isotope( '.grid', {
            itemSelector: '.grid__item',
            // layoutMode: 'masonry',
            masonry: {
               gutter: 18
               // isFitWidth: true
            }
         });
      });

      $('.content').addClass('animated fadeIn');
      $('.grid').addClass('animated bounceInUp');
      $('.headline').addClass('animated bounceInDown');
   }

   render(){
      return(
         <div className="content" style={{backgroundImage: "url(http://www.tayloredwebs.co.uk/wp-content/uploads/2016/06/a72edf4f921646a387436a0f52461991.jpg)"}}>
            <div className="mask">
               <div className="container">
                  <div className="headline">Some Of My Works</div>
                  <ul className="grid">
                     <li className="grid__item grid__item--portfolio">
                        <img className="grid_image" src="http://www.cosminsc.net/wp-content/uploads/2016/03/weblenis-310x413.png"/>
                        <div className="grid__content grid__content--portfolio">
                              <ul className="labels">
                                 <li className="labels__item">Graphic Layout Design</li>
                                 <li className="labels__item">Logo Design</li>
                                 <li className="labels__item">Ad Banners Design</li>
                              </ul>
                        </div>
                     </li>
                     <li className="grid__item grid__item--portfolio">
                        <img className="grid_image" src="http://www.cosminsc.net/wp-content/uploads/2016/03/infopagina-310x310.jpg"/>
                        <div className="grid__content grid__content--portfolio">
                              <ul className="labels">
                                 <li className="labels__item">Graphic Layout Design</li>
                                 <li className="labels__item">Logo Design</li>
                              </ul>
                        </div>
                     </li>
                     <li className="grid__item grid__item--portfolio">
                        <img className="grid_image" src="http://www.cosminsc.net/wp-content/uploads/2015/05/BearWallowEvents-310x260.jpeg"/>
                        <div className="grid__content grid__content--portfolio">
                              <ul className="labels">
                                 <li className="labels__item">Website Design</li>
                                 <li className="labels__item">HTML/CSS</li>
                                 <li className="labels__item">Wordpress</li>
                              </ul>
                        </div>
                     </li>
                     <li className="grid__item grid__item--portfolio">
                        <img className="grid_image" src="http://www.cosminsc.net/wp-content/uploads/2014/06/LotsOfHead-310x441.png"/>
                        <div className="grid__content grid__content--portfolio">
                              <ul className="labels">
                                 <li className="labels__item">HTML/CSS</li>
                                 <li className="labels__item">Logo Design</li>
                                 <li className="labels__item">Wordpress</li>
                              </ul>
                        </div>
                     </li>
                     <li className="grid__item grid__item--portfolio">
                        <img className="grid_image" src="http://www.cosminsc.net/wp-content/uploads/2013/12/Weight-Loss-Site-310x594.png"/>
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
                        <img className="grid_image" src="http://www.cosminsc.net/wp-content/uploads/2013/08/book_author_design-310x372.jpg"/>
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
                        <img className="grid_image" src="http://www.cosminsc.net/wp-content/uploads/2013/06/homebrewvideos-310x398.png"/>
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
                        <img className="grid_image" src="http://www.cosminsc.net/wp-content/uploads/2013/06/alifelessanxious_design-310x492.jpg"/>
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
                        <img className="grid_image" src="http://www.cosminsc.net/wp-content/uploads/2013/06/corechiro-310x284.png"/>
                        <div className="grid__content grid__content--portfolio">
                              <ul className="labels">
                                 <li className="labels__item">HTML/CSS</li>
                                 <li className="labels__item">Wordpress</li>
                              </ul>
                        </div>
                     </li>
                     <li className="grid__item grid__item--portfolio">
                        <img className="grid_image" src="http://www.cosminsc.net/wp-content/uploads/2012/12/greenbusiness-310x455.jpg"/>
                        <div className="grid__content grid__content--portfolio">
                              <ul className="labels">
                                 <li className="labels__item">Graphic Layout Design</li>
                              </ul>
                        </div>
                     </li>
                     <li className="grid__item grid__item--portfolio">
                        <img className="grid_image" src="http://www.cosminsc.net/wp-content/uploads/2012/12/23-310x413.jpg"/>
                        <div className="grid__content grid__content--portfolio">
                              <ul className="labels">
                                 <li className="labels__item">Graphic Layout Design</li>
                              </ul>
                        </div>
                     </li>
                     <li className="grid__item grid__item--portfolio">
                        <img className="grid_image" src="http://www.cosminsc.net/wp-content/uploads/2012/12/10-310x269.jpg"/>
                        <div className="grid__content grid__content--portfolio">
                              <ul className="labels">
                                 <li className="labels__item">Graphic Layout Design</li>
                              </ul>
                        </div>
                     </li>
                     <li className="grid__item grid__item--portfolio">
                        <img className="grid_image" src="http://www.cosminsc.net/wp-content/uploads/2014/07/Lyon_flyer-310x401.png"/>
                        <div className="grid__content grid__content--portfolio">
                              <ul className="labels">
                                 <li className="labels__item">Print Design</li>
                              </ul>
                        </div>
                     </li>
                     <li className="grid__item grid__item--portfolio">
                        <img className="grid_image" src="http://www.cosminsc.net/wp-content/uploads/2012/12/08-310x432.jpg"/>
                        <div className="grid__content grid__content--portfolio">
                              <ul className="labels">
                                 <li className="labels__item">Print Design</li>
                              </ul>
                        </div>
                     </li>
                     <li className="grid__item grid__item--portfolio">
                        <img className="grid_image" src="http://www.cosminsc.net/wp-content/uploads/2012/12/timeline_cover_v2-310x114.jpg"/>
                        <div className="grid__content grid__content--portfolio">
                              <ul className="labels">
                                 <li className="labels__item">Graphic Design</li>
                              </ul>
                        </div>
                     </li>
                     <li className="grid__item grid__item--portfolio">
                        <img className="grid_image" src="http://www.cosminsc.net/wp-content/uploads/2012/12/12-310x114.jpg"/>
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