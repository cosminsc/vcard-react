import React from "react";
import $ from "jquery";
import Isotope from "isotope-layout";

import Skills from "../components/Skills";
import TimeLines from "../components/TimeLines";

const data = require('../data.json');

export default class Resume extends React.Component {

   componentWillMount() {
      $(window).scrollTop(0);
   }

   componentDidMount() {
      document.title = data.resume.title;

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
      return (
         <div className="content" style={{ backgroundImage: "url(/images/bg/bg-resume.jpg)" }}>
            <div className="mask">
               <div className="container">
                  <div className="page_title">{data.resume.title}</div>
                  <div className="widget">
                     <div className="headline"><i className="fa fa-user" aria-hidden="true"></i> {data.resume.about.headline}</div>
                     <div className="text_block" dangerouslySetInnerHTML={{ __html: this.htmlDecode(data.resume.about.textblock) }} />

                     <div className="row">
                        <div className="col-sm-6">
                           <div className="headline"><i className="fa fa-code" aria-hidden="true"></i> {data.resume.skills.headline}</div>
                           <Skills groups={data.resume.skills.groupList} />
                        </div>

                        <div className="col-sm-6">
                           <div className="headline"><i className="fa fa-bookmark" aria-hidden="true"></i> {data.resume.work.headline}</div>
                           <TimeLines list={data.resume.work.jobs} />
                           <div className="headline headline--upspace"><i className="fa fa-graduation-cap" aria-hidden="true"></i> {data.resume.education.headline}</div>
                           <TimeLines list={data.resume.education.classes} />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}