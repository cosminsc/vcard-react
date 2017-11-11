import React from "react";
import $ from "jquery";

import LineBar from "../components/LineBar";

export default class Skills extends React.Component{

   getSkillColor(procent){

      let colors = {
         30: "skill--basic",
         60: "skill--entry",
         75: "skill--medium",
         90: "skill--strong"
      },
      array = Object.keys(colors),
      closest = array.sort( (a, b) => Math.abs(parseInt(procent) - a) - Math.abs(parseInt(procent) - b) )[0];

      return colors[closest];
   }

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
                           <div className={"skill " + this.getSkillColor(skill.progress)} key={index} title={skill.progress}>
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
