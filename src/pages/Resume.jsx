import React from "react";
import $ from "jquery";
import Isotope from "isotope-layout";

export default class Resume extends React.Component {

   constructor(props){
      super(props);

      this.state = {
         pageTitle: 'Resume'
      }
   }

   componentWillMount() {
      $(window).scrollTop(0);
   }

   componentDidMount() {
      document.title = this.state.pageTitle;

      var wH = $(window).height();
      $('.content, .mask').css({'min-height': wH});

      $('.content').addClass('animated fadeIn');
      $('.widget').addClass('animated bounceInUp');
      $('.headline').addClass('animated bounceInDown');
   }

   render() {
      return (
         <div className="content" style={{ backgroundImage: "url(/images/bg/bg-resume.jpg)" }}>
            <div className="mask">
               <div className="container">
                  <div className="headline">{this.state.pageTitle}</div>
                  <div className="widget">
                     <div className="row">
                        <div className="col-sm-6">
                           <div className="listname">Markup & Styling</div>
                           <ul className="skill">
                              <li className="skill__item">
                                 <div className="skill__name">HTML/CSS</div>
                                 <div className="linebar">
                                    <div className="linebar__progress" style={{ width: '99%' }}></div>
                                 </div>
                              </li>
                              <li className="skill__item">
                                 <div className="skill__name">Bootstrap</div>
                                 <div className="linebar">
                                    <div className="linebar__progress" style={{ width: '99%' }}></div>
                                 </div>
                              </li>
                              <li className="skill__item">
                                 <div className="skill__name">AnimateCSS</div>
                                 <div className="linebar">
                                    <div className="linebar__progress" style={{ width: '99%' }}></div>
                                 </div>
                              </li>
                              <li className="skill__item">
                                 <div className="skill__name">XML</div>
                                 <div className="linebar">
                                    <div className="linebar__progress" style={{ width: '99%' }}></div>
                                 </div>
                              </li>
                              <li className="skill__item">
                                 <div className="skill__name">JSON</div>
                                 <div className="linebar">
                                    <div className="linebar__progress" style={{ width: '99%' }}></div>
                                 </div>
                              </li>
                              <li className="skill__item">
                                 <div className="skill__name">Handlebars</div>
                                 <div className="linebar">
                                    <div className="linebar__progress" style={{ width: '99%' }}></div>
                                 </div>
                              </li>
                              <li className="skill__item">
                                 <div className="skill__name">Mustache</div>
                                 <div className="linebar">
                                    <div className="linebar__progress" style={{ width: '99%' }}></div>
                                 </div>
                              </li>
                              <li className="skill__item">
                                 <div className="skill__name">SASS</div>
                                 <div className="linebar">
                                    <div className="linebar__progress" style={{ width: '99%' }}></div>
                                 </div>
                              </li>
                              <li className="skill__item">
                                 <div className="skill__name">FontAwesome</div>
                                 <div className="linebar">
                                    <div className="linebar__progress" style={{ width: '99%' }}></div>
                                 </div>
                              </li>
                           </ul>

                           <div className="listname">Development & Build Tools</div>
                           <ul className="skill">
                              <li className="skill__item">
                                 <div className="skill__name">PHP</div>
                                 <div className="linebar">
                                    <div className="linebar__progress" style={{ width: '99%' }}></div>
                                 </div>
                              </li>
                              <li className="skill__item">
                                 <div className="skill__name">PHPUnit</div>
                                 <div className="linebar">
                                    <div className="linebar__progress" style={{ width: '80%' }}></div>
                                 </div>
                              </li>
                              <li className="skill__item">
                                 <div className="skill__name">Wordpress</div>
                                 <div className="linebar">
                                    <div className="linebar__progress" style={{ width: '99%' }}></div>
                                 </div>
                              </li>
                              <li className="skill__item">
                                 <div className="skill__name">Laravel</div>
                                 <div className="linebar">
                                    <div className="linebar__progress" style={{ width: '60%' }}></div>
                                 </div>
                              </li>
                              <li className="skill__item">
                                 <div className="skill__name">Git</div>
                                 <div className="linebar">
                                    <div className="linebar__progress" style={{ width: '80%' }}></div>
                                 </div>
                              </li>
                              <li className="skill__item">
                                 <div className="skill__name">NPM</div>
                                 <div className="linebar">
                                    <div className="linebar__progress" style={{ width: '70%' }}></div>
                                 </div>
                              </li>
                              <li className="skill__item">
                                 <div className="skill__name">Gulp</div>
                                 <div className="linebar">
                                    <div className="linebar__progress" style={{ width: '70%' }}></div>
                                 </div>
                              </li>
                              <li className="skill__item">
                                 <div className="skill__name">Vagrant</div>
                                 <div className="linebar">
                                    <div className="linebar__progress" style={{ width: '60%' }}></div>
                                 </div>
                              </li>
                           </ul>
                        </div>

                        <div className="col-sm-6">
                           <div className="listname">JS Libraries & Frameworks</div>
                           <ul className="skill">
                              <li className="skill__item">
                                 <div className="skill__name">jQuery</div>
                                 <div className="linebar">
                                    <div className="linebar__progress" style={{ width: '99%' }}></div>
                                 </div>
                              </li>
                              <li className="skill__item">
                                 <div className="skill__name">jQueryValidation</div>
                                 <div className="linebar">
                                    <div className="linebar__progress" style={{ width: '99%' }}></div>
                                 </div>
                              </li>
                              <li className="skill__item">
                                 <div className="skill__name">StoreJS</div>
                                 <div className="linebar">
                                    <div className="linebar__progress" style={{ width: '99%' }}></div>
                                 </div>
                              </li>
                              <li className="skill__item">
                                 <div className="skill__name">UnderscoreJS</div>
                                 <div className="linebar">
                                    <div className="linebar__progress" style={{ width: '80%' }}></div>
                                 </div>
                              </li>
                              <li className="skill__item">
                                 <div className="skill__name">QUnit</div>
                                 <div className="linebar">
                                    <div className="linebar__progress" style={{ width: '70%' }}></div>
                                 </div>
                              </li>
                              <li className="skill__item">
                                 <div className="skill__name">Karma</div>
                                 <div className="linebar">
                                    <div className="linebar__progress" style={{ width: '60%' }}></div>
                                 </div>
                              </li>
                              <li className="skill__item">
                                 <div className="skill__name">ReactJS</div>
                                 <div className="linebar">
                                    <div className="linebar__progress" style={{ width: '70%' }}></div>
                                 </div>
                              </li>
                              <li className="skill__item">
                                 <div className="skill__name">NodeJS</div>
                                 <div className="linebar">
                                    <div className="linebar__progress" style={{ width: '30%' }}></div>
                                 </div>
                              </li>
                           </ul>

                           <div className="listname">API Integrations</div>
                           <ul className="skill">
                              <li className="skill__item">
                                 <div className="skill__name">Infusionsoft</div>
                                 <div className="linebar">
                                    <div className="linebar__progress" style={{ width: '99%' }}></div>
                                 </div>
                              </li>
                              <li className="skill__item">
                                 <div className="skill__name">MailChimp</div>
                                 <div className="linebar">
                                    <div className="linebar__progress" style={{ width: '80%' }}></div>
                                 </div>
                              </li>
                              <li className="skill__item">
                                 <div className="skill__name">Mixpanel</div>
                                 <div className="linebar">
                                    <div className="linebar__progress" style={{ width: '70%' }}></div>
                                 </div>
                              </li>
                           </ul>

                           <div className="listname">Personal</div>
                           <ul className="skill">
                              <li className="skill__item">
                                 <div className="skill__name">Reliable</div>
                                 <div className="linebar">
                                    <div className="linebar__progress" style={{ width: '99%' }}></div>
                                 </div>
                              </li>
                              <li className="skill__item">
                                 <div className="skill__name">Responsible</div>
                                 <div className="linebar">
                                    <div className="linebar__progress" style={{ width: '99%' }}></div>
                                 </div>
                              </li>
                              <li className="skill__item">
                                 <div className="skill__name">Creative</div>
                                 <div className="linebar">
                                    <div className="linebar__progress" style={{ width: '99%' }}></div>
                                 </div>
                              </li>
                           </ul>
                        </div>
                     </div>

                     <div className="row">
                        <div className="col-sm-12">
                           <div className="listname listname--upspace"><i className="fa fa-bookmark" aria-hidden="true"></i> Work History</div>
                           <ul className="work">
                              <li className="work__item">
                                 <div className="work__name">Freelancing</div>
                                 <div className="work__period">
                                     <i className="fa fa-calendar"></i> Oct 2017 - Present
                                 </div>
                                 <div className="work__description">
                                    Looking to work on project-based only.
                                 </div>
                              </li>
                              <li className="work__item">
                                 <div className="work__name">Senior WordPress Developer</div>
                                 <div className="work__period">
                                     <i className="fa fa-briefcase"></i> Nego-Solutions.com &nbsp;&nbsp;<i className="fa fa-calendar"></i> Nov 2012 - Oct 2017
                                 </div>
                                 <div className="work__description">
                                   Over the time I became the right person to be involved in WordPress development. Since I have completed successsfully the first project on Wordpress, I have worked on a variety of things related to Wordpress such as: custom themes, custom plugins, speed optimization, API integrations or maintenance services.
                                 </div>
                              </li>
                              <li className="work__item">
                                 <div className="work__name">Web Designer</div>
                                 <div className="work__period">
                                     <i className="fa fa-briefcase"></i> Nego-Solutions.com &nbsp;&nbsp;<i className="fa fa-calendar"></i> Sept 2011 - Nov 2012
                                 </div>
                                 <div className="work__description">
                                    I have started collaborating with Nego-Solutions as web designer. I was responsible for creating landing pages, designing banners for Facebook/Twitter or any other custom kit branding.
                                 </div>
                              </li>
                              <li className="work__item">
                                 <div className="work__name">Graphic Designer (Volunteer)</div>
                                 <div className="work__period">
                                    <i className="fa fa-briefcase"></i> ForumGratuit.ro &nbsp;&nbsp;<i className="fa fa-calendar"></i> Jan 2010 - Sept 2012 (part-time)
                                 </div>
                                 <div className="work__description">
                                    I have joined the team of <a href="http://forumgratuit.ro" target="_blank">ForumGratuit.ro</a> as a volunteer graphic designer. I have created any kind of graphic design packages for their customers. Besides this I learned and improved my knowledge of HTML/CSS and jQuery library by customizing static templates and forums.
                                 </div>
                              </li>
                              <li className="work__item">
                                 <div className="work__name">Freelancing</div>
                                 <div className="work__period">
                                     <i className="fa fa-calendar"></i> May 2007 - Sept 2010
                                 </div>
                                 <div className="work__description">
                                    Miscellaneous small graphic design projects.
                                 </div>
                              </li>
                           </ul>

                           <div className="listname listname--upspace"><i className="fa fa-graduation-cap" aria-hidden="true"></i> Education</div>
                           <ul className="work">
                              <li className="work__item">
                                 <div className="work__name">High School, natural sciences | Nicolae Titulescu</div>
                                 <div className="work__period">
                                     <i className="fa fa-calendar"></i> 2005 - 2009
                                 </div>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}