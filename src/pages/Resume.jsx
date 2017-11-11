import React from "react";
import PropTypes from 'prop-types';

import About from "../components/About";
import Skills from "../components/Skills";
import TimeLines from "../components/TimeLines";

export default class Resume extends React.Component {

   componentDidMount() {
      this.props.pageAnimate();
   }


   render() {
      let pageData = this.props.pageData;
      return (
         <div className="content" style={{ backgroundImage: "url(/images/bg/bg-resume.jpg)" }}>
            <div className="mask">
               <div className="container">
                  <div className="page_title">{pageData.title}</div>
                  <div className="widget">
                     <About text={pageData.about} />

                     <div className="row">
                        <div className="col-sm-6">
                           <div className="headline"><i className="fa fa-code" aria-hidden="true"></i> {pageData.skills.headline}</div>
                           <Skills groups={pageData.skills.groupList} />
                        </div>

                        <div className="col-sm-6">
                           <div className="headline"><i className="fa fa-line-chart" aria-hidden="true"></i> {pageData.work.headline}</div>
                           <TimeLines list={pageData.work.jobs} />
                           <div className="headline headline--upspace"><i className="fa fa-bookmark" aria-hidden="true"></i> {pageData.certifications.headline}</div>
                           <TimeLines list={pageData.certifications.list} />
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
    pageData: PropTypes.object.isRequired,
    pageAnimate: PropTypes.func.isRequired
}