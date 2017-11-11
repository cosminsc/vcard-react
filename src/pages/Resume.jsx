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
                        <div className="col-sm-7">
                           <TimeLines list={pageData.courses.list} headline={pageData.courses.headline} />
                           <TimeLines list={pageData.work.jobs} headline={pageData.work.headline} />
                           <TimeLines list={pageData.education.classes} headline={pageData.education.headline} />
                        </div>
                        <div className="col-sm-5">
                           <div className="headline"><i className="fa fa-code" aria-hidden="true"></i> {pageData.skills.headline}</div>
                           <Skills groups={pageData.skills.groupList} />
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