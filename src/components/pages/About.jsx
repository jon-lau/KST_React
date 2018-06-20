import React from 'react';
import { Container, Loader, Header, Message, Button } from 'semantic-ui-react';
import { News } from '/imports/api/news/news';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
/** not neat**/
/** Renders the Page for editing a single document. */
export default class AboutUs extends React.Component {
  render() {
    return (
      <div className="kst-landing-background">
      <Container>
          <section className="content">
          <section>
            <h1>Who We Are</h1>

            <p>&emsp;Ka’ala Systems Technology Corporation (KST) has a vast amount of IT service experience across all of the IT verticals.  Our IT functional areas span strategic and tactical satellite systems, base telecommunications in-side and out-side plant, Voice and Data Switches, data center management, network operation center management, Tech Control Facility, local and wide area network engineering & sustainment, and provide fully integrated CCTV-based security solution services, VTC and Multimedia & Audio-Visual support services. Our company aspires to: </p>

            <ul>
              <li className="booleanlist">Building a diverse clientele base</li>
              <li className="booleanlist">Maintaining an excellent reputation for performing on time, within budget and to customer satisfaction</li>
              <li className="booleanlist">Cost Competetiveness</li>
              <li className="booleanlist">Sustaining employee growth and development</li>
            </ul>

            <p className="underlined">&emsp;KST is a native Hawaiian/Service Disabled Veteran Owned Small Business founded in Hawaii in March 2011. Ka’ala Systems Technology Corporation is a certified Minority and Disadvantaged Business Enterprise; GSA IT Schedule 70 and a certified participant within the SBA 8(a) Business Development Program. KST is also a GWAC STARS II contract holder # GS00Q17GWD2199 and Navy IDIQ SeaPort-e contract N00178-16-D-8836.</p>


            <h1>Solutions</h1>

            <p>&emsp; KST’s primary business area is “Telecommunication Services,” operating within the primary NAICS code 541519. What we really do is provide a complete range of information systems and communications systems services for the design and implementation of business solutions using leading edge IT and the latest Telecommunication technology for commercial entities, as well as federal, state, and local government agencies.</p>

            <p>KST services include:</p>
            <ul>
              <li className="booleanlist">Telecommunications Service Support</li>
              <li className="booleanlist">Assessment of communications and networking needs</li>
              <li className="booleanlist">Installation of structured voice and data cable networks (Inside Plant)</li>
              <li className="booleanlist">Fully integrated CCTV-based security solution and installation</li>
              <li className="booleanlist">System development, integration, and deployment services</li>
              <li className="booleanlist">IT professionals for information operations and maintenance</li>
              <li className="booleanlist">Multimedia Visual Information services</li>
              <li className="booleanlist">Rough wiring for audio and video</li>
              <li className="booleanlist">Program/Project Management Support</li>
              <li className="booleanlist">Help desk support</li>
              <li className="booleanlist">Facilities management</li>
              <li className="booleanlist">Network security, consulting, and training services for commercial entities, as well as federal, state, and local government agencies</li>
              <li className="booleanlist">Planning and design of office workstation topology</li>
              <li className="booleanlist">Outsourcing/staff augmentation</li>
              <li className="booleanlist">Management consulting and organizational development, and</li>
              <li className="booleanlist">Within DoD guidelines, manage social media technology for clients as might be adopted </li>
            </ul>

            <p> &emsp; We are experts in planning, designing and building multi-departmental database management systems that integrate the many “islands of information” that exist in most local governments, state governments, regional, and national (federal) agencies. KST is highly skilled at analyzing an organization’s work functions and working with management and staff to evaluate the agency’s short- and long-term information management needs and objectives. Satisfying KST customer requirements and ensuring their ultimate satisfaction will always be our top priority. KST manages its entire workload, present and future, with minimal overhead, leaving more value to its customer community and saving them money. </p>
            <Button as={NavLink} activeClassName="" exact to="/"></Button>
          </section>
            <img src="/images/mountain3.jpg" alt="mountain" className="bottompic"></img>
          </section>
          </Container>
          </div>
    );
  }
}
