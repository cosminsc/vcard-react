import React from "react";

export default class Notfound extends React.Component{

   componentDidMount() {
      this.props.pageAnimate();
   }

   render(){
      return(
         <div className="content" style={{backgroundImage: "url(https://i.ytimg.com/vi/2rss9qfMubw/maxresdefault.jpg)"}}>
            <div className="mask">
            </div>
         </div>
      );
   }
}