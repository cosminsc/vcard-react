import React from "react";
import $ from "jquery";
import Isotope from "isotope-layout";
import ImagesLoaded from "imagesloaded";
import PropTypes from 'prop-types';

import Projects from "../components/Projects";

export default class Portfolio extends React.Component {

   componentDidMount() {
      this.props.pageAnimate();

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
   }

   render() {
      return (
         <div className="content" style={{ backgroundImage: "url(/images/bg/bg-portfolio.jpg)" }}>
            <div className="mask">
               <div className="container">
                  <div className="page_title">{this.props.pageData.title}</div>
                  <Projects list={this.props.pageData.list} />
               </div>
            </div>
         </div>
      );
   }
}

Portfolio.propTypes = {
    pageData: PropTypes.object.isRequired,
    pageAnimate: PropTypes.func.isRequired
}