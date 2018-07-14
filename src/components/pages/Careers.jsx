import React from 'react';
import { Container, Button } from 'semantic-ui-react';
import { NavLink, Link } from 'react-router-dom';
/** Renders the Page for editing a single document. */
export default class Careers extends React.Component {
  render() {
    return (
      <div className="kst-landing-background">
      <Container>
          <section className="content">
          <section>
            <h1>Careers</h1>
            <h2>Explore a Career in Information Technology</h2>
            <p>
&emsp;If you enjoy solving problems, and want one of the country's fastest growing careers, consider a job with KST in information technology (IT). In this wide-ranging field, positions include everything from telecommunications and computer technical support and maintenance to computer programming, network and software engineering, as well as management positions in information systems and project management.
            </p>
          <br></br>
          <div className="listbox">
          <div className="centered bold" styles="text-decoration: underline;">
          Company Benefits
          </div>
          <div className="centered">
          <br></br>
          100% Employer Paid Medical/Dental/Vision
          <br></br>
          401k Retirement
          <br></br>
          Paid Time Off
          <br></br>
          Federal Holidays Time Off
          <br></br>
          Bereavement Leave
          <br></br>
          Training and Development
          <br></br>
          Growth Opportunities
          <br></br>
          Annual Company Celebrations
          <br></br>
          Company Shirts

          </div>
          <div className="centered bold">
          <br></br>
          Be Part of a Great Place to Work!
          <br></br>
          </div>
          </div>
          <br></br><br></br>
          <div className="button"><Link to="/Jobs">Current Job Listings at KST</Link></div>
          <br></br>
          <div className="button"><a src='/images/handbookv2.pdf'>Employee Handbook [Download]</a></div>
          <br></br>
          </section>
            <img src="/images/mountain3.jpg" alt="mountain" className="bottompic"></img>
          </section>
          </Container>
          </div>
    );
  }
}
