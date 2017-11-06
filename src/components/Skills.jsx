import React from "react";
import $ from "jquery";

import LineBar from "../components/LineBar";

export default class Skills extends React.Component{

   render(){
      let groups = this.props.groups;

      return(
         <div className="skills">
            {groups.map((group, index) => {
               return(
                  <div className="skills__group" key={index}>
                     <div className="group_name">{group.name}</div>
                     {group.list.map((skill, index) => {
                        return(
                           <div className="skill" key={index}>
                              <div className="skill__name">{skill.name}</div>
                              <LineBar progress={skill.progress} />
                           </div>
                        );
                     })}
                  </div>
               );
            })}
         </div>
      );
   }
}
