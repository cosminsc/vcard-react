import React from "react";
import PropTypes from 'prop-types';
import $ from "jquery";
import { PulseLoader } from 'react-spinners';

import Header from "./Header";
import { util } from "./util"

export default class Root extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         loading: true
      }
   }

   componentDidMount() {
      setTimeout(() => {
         this.setState({
            loading: false
         });
      }, 1000);

      $(window).on('scroll', util.animateInView);
   }


   render() {
      return (
         <div className="wrapper">
            {this.state.loading === false ? (
               <div className="layout">
                  <Header />
                  {this.props.children}
               </div>
            ) : (
                  <div className="loading">
                     <PulseLoader loading={this.state.loading} />
                  </div>
               )}
         </div>
      );
   }
}