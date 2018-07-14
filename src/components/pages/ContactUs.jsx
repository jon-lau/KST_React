import React from 'react';
import { Container, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
/** Renders the Page for editing a single document. */
export default class ContactUs extends React.Component {
  render() {
    return (
      <div className="kst-landing-background">
      <Container>
          <section className="content ContactUs">
          <section>
            <h1>Contact Us</h1>

            <p>Mahalo (Thank you) for your interest in Ka’ala Systems Technology Corporation. To receive additional information about our company, federal contracting, potential teaming opportunities and establishment of strategic partnerships, please contact the following via telephone or email. We look forward to speaking with you! Aloha…</p>

          <h2>Contact Information</h2>

          <h3>Corporate Headquarters</h3>
          <p>
            Ka’ala Systems Technology Corporation
            <br></br> 98-025 Hekaha St.
            <br></br>     Bldg. 2, Suite 224A
            <br></br>Aiea, Hawaii 96701-4904
<br></br>
            <br></br>Office: 808-521-7000
            <br></br>Fax: 808-521-7003
            <br></br>Email: KST@ksthawaii.com
            </p>
            <h5>
            <br></br>Business Hours
            <br></br>7:30am-3:30pm HST
            </h5>
          </section>
            <img src="/images/mountain3.jpg" alt="mountain" className="bottompic"></img>
          </section>
          </Container>
          </div>
    );
  }
}
