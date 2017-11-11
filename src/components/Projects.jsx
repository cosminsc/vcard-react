import React from "react";
import lightbox2 from "lightbox2";

export default class Projects extends React.Component{

   render(){
      let projects = this.props.list;

      return(
         <div className="grid">
            {projects.map((project, index) => {
               return(
                  <div className="grid__item grid__item--portfolio" key={index}>
                     <a href={project.image} data-lightbox="portfolio">
                        <img className="grid_image" src={project.thumb} />
                     </a>
                     <div className="grid__content grid__content--portfolio">
                        <div className="labels">
                           {project.tech.map((item, index) => {
                              return(
                                 <div className="labels__item" key={index}>{item}</div>
                              );
                           })}
                        </div>
                     </div>
                  </div>
               );
            })}
         </div>
      );
   }
}
