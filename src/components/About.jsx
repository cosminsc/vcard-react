import React from "react";
import $ from "jquery";

export default class About extends React.Component {

   rawMarkup(rawMarkup) {
      return { __html: rawMarkup };
   }

   render() {
      let text = this.props.text;

      return (
         <div className="text">
            {text.map((text, index) => {
               return (
                  <div className="text__section" key={index}>
                     <h3>{text.headline}</h3>
                     {text.paragraphs.map((item, index) => {
                        return (
                           <div className="text__block" key={index}>
                              {typeof item === "object" ? (
                                 <ul>
                                    {item.list.map((li, index) => {
                                       return (
                                          <li key={index} dangerouslySetInnerHTML={this.rawMarkup(li)} />
                                       );
                                    })}
                                 </ul>
                              ) : (
                                    <p dangerouslySetInnerHTML={this.rawMarkup(item)} />
                                 )}
                           </div>
                        )
                     })}
                  </div>
               );
            })}
         </div>
      );
   }
}
