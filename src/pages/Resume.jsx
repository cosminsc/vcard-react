import React from "react";
import $ from "jquery";
import Isotope from "isotope-layout";
import PropTypes from 'prop-types';

import Skills from "../components/Skills";
import TimeLines from "../components/TimeLines";

export default class Resume extends React.Component {

   componentWillMount() {
      $(window).scrollTop(0);
   }

   componentDidMount() {
      document.title = this.props.pageData.title;

      var wH = $(window).height();
      $('.content, .mask').css({ 'min-height': wH });

      $('.content').addClass('animated fadeIn');

      if($(window).width() > 1024){
         $('.widget').addClass('animated bounceInUp');
         $('.page_title').addClass('animated bounceInDown');
      }

   }

   htmlDecode(input) {
      var e = document.createElement('div');
      e.innerHTML = input;
      return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
   }


   render() {
      let pageData = this.props.pageData;
      return (
         <div className="content" style={{ backgroundImage: "url(/images/bg/bg-resume.jpg)" }}>
            <div className="mask">
               <div className="container">
                  <div className="page_title">{pageData.title}</div>
                  <div className="widget">
                     <div className="headline"><i className="fa fa-user" aria-hidden="true"></i> {pageData.about.headline}</div>
                     <div className="text_block" dangerouslySetInnerHTML={{ __html: this.htmlDecode(pageData.about.textblock) }} />

                     <div className="row">
                        <div className="col-sm-6">
                           <div className="headline"><i className="fa fa-code" aria-hidden="true"></i> {pageData.skills.headline}</div>
                           <Skills groups={pageData.skills.groupList} />
                        </div>

                        <div className="col-sm-6">
                           <div className="headline"><i className="fa fa-bookmark" aria-hidden="true"></i> {pageData.work.headline}</div>
                           <TimeLines list={pageData.work.jobs} />
                           <div className="headline headline--upspace"><i className="fa fa-graduation-cap" aria-hidden="true"></i> {pageData.education.headline}</div>
                           <TimeLines list={pageData.education.classes} />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

Resume.propTypes = {
    pageData: PropTypes.object.isRequired
}