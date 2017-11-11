import React from "react";
import $ from "jquery";

import LineBar from "../components/LineBar";

export default class TimeLines extends React.Component {

   render() {
      let jobs = this.props.list;

      return (
         <div className="timeline">
            {jobs.map((job, index) => {
               return (
                  <div className="timeline__item" key={index}>
                        {job.period !='' ? (
                           <div className="timeline__period">
                              <i className="fa fa-calendar"></i> {job.period}
                        </div>
                        ) : ''}

                        {job.company !='' ? (
                           <div className="timeline__company">
                              <i className="fa fa-check-circle"></i> {job.company}
                        </div>
                        ) : ''}
                        <div className="timeline__name">{job.name}</div>
                        <div className="timeline__description">{job.description}</div>
                  </div>
               );
            })}
         </div>
      );
   }
}