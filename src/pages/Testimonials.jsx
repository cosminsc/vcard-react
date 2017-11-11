import React from "react";
import $ from "jquery";
import Isotope from "isotope-layout";
import PropTypes from 'prop-types';

import Quotes from "../components/Quotes";

export default class Testimonials extends React.Component{

   componentDidMount() {
      this.props.pageAnimate();

      new Isotope( '.grid', {
         itemSelector: '.grid__item',
         // layoutMode: 'masonry',
         masonry: {
            gutter: 18
            // isFitWidth: true
         }
      });
   }

   render(){
      return(
         <div className="content" style={{backgroundImage: "url(/images/bg/bg-testimonials.jpg)"}}>
            <div className="mask">
               <div className="container">
                  <div className="page_title">{this.props.pageData.title}</div>
                  <Quotes list={this.props.pageData.list}/>
               </div>
            </div>
         </div>
      );
   }
}

Testimonials.propTypes = {
    pageData: PropTypes.object.isRequired,
    pageAnimate: PropTypes.func.isRequired
}