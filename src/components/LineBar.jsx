import React from "react";
import $ from "jquery";

export default class LineBar extends React.Component{

   componentDidMount() {
      $('.linebar__progress').addClass('animated slideInLeft');
   }


   render(){
      return(
         <div className="linebar">
            <div className="linebar__progress animateInView" data-animation="slideInLeft" style={{width: this.props.progress}}>
               <span>{this.props.progress}</span>
            </div>
         </div>
      );
   }
}