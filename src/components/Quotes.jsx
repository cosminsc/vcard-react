import React from "react";
import $ from "jquery";

export default class Quotes extends React.Component{

   render(){
      let quotes = this.props.list;

      return(
         <div className="grid">
            {quotes.map((quote, index) => {
               return(
                  <div className="grid__item" key={index}>
                     <div className="grid__title">{quote.name}</div>
                     <div className="grid__content">{quote.description}</div>
                  </div>
               );
            })}
         </div>
      );
   }
}
