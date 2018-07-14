import React from 'react';
import { Container, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
/** Renders the Page for editing a single document. */
export default class ContractList extends React.Component {
  render() {
    return (
      <div className="kst-landing-background">
      <Container>
          <section className="content">
          <section>
            <h1>Stars II Contract Information</h1>
            <br></br>
              <p className="bold">STARS II Basic Contract number:</p> GS00Q17GWD2199
              <br></br><br></br>
              <p className="bold">Contractor DUNS number:</p> 967716429
              <br></br><br></br>
              <p className="bold">Contact information of Contractor’s Program Manager:</p>
              David Millard, dmillard@ksthawaii.com, 808-258-4532

            <br></br><br></br><br></br>
            <div className="button left"><a href="STARSII2017June.html">Stars II News Story</a></div>
            <br></br> <br></br><br></br>
            <div className="button left"><a href="https://www.gsa.gov/8astars2">GSA Stars II Website</a></div>
            <br></br> <br></br><br></br>
            <div className="button left"><a href="KST_Solutions_8(a)_Process.pdf" target="_blank">Streamlined 8(a) Sole Source Contracts</a></div>
            <br></br><br></br>

          </section>
            <img src="/images/mountain3.jpg" alt="mountain" className="bottompic"></img>
          </section>
          </Container>
          </div>
    );
  }
}
