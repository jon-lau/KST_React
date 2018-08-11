import React from 'react';
import { Container, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
/** Renders the Page for editing a single document. */
export default class ServiceInfo extends React.Component {
  render() {
    return (
      <div className="kst-landing-background">
      <Container>
          <section className="content">
          <section>
            <h1>Service Information</h1>
            <div className="service-grid">
              <div className="service-grid-item1">
              <h1 className="h25" Style="border-bottom-style: none; margin-bottom: -20px;">Credentials</h1>

            <div>
            <br></br>
              <h2>SECNAV M-5239.2</h2>
              - Cyberspace Information<br></br>

              - Technology and Cybersecurity<br></br>

              - Workforce Management and<br></br>

              - Qualification Manual<br></br>
              <table className="buttoncenter tight">
                <tr>
                  <td>
                    <div className="button"><a href="Credentials/SECNAV_M-5239.2.pdf" download>Download</a></div>
                  </td>
                  <td>
                    <div className="button"><a href="Credentials/SECNAV_M-5239.2.pdf" target="_blank">Preview</a></div>
                  </td>
                </tr>
              </table>
            </div>
            <div>
            <br></br>
              <h2>SECNAV M-5239.2 Appendix 4</h2>
              - Cyber It/Cybersecurity Workforce Qualification Matrix<br></br>
              <table className="buttoncenter tight">
                <tr>
                  <td>
                    <div className="button"><a href="Credentials/SECNAV_M-5239.2_Appendix_4.pdf" download>Download</a></div>
                  </td>
                  <td>
                    <div className="button"><a href="Credentials/SECNAV_M-5239.2_Appendix_4.pdf" target="_blank">Preview</a></div>
                  </td>
                </tr>
              </table>
            </div>
            <div>
            <br></br>
              <h2>CompTIA Renewal procedure</h2>
              - Cyber It/Cybersecurity Workforce Qualification Matrix<br></br>
              <table className="buttoncenter tight">
                <tr>
                  <td>
                    <div className="button"><a href="Credentials/CompTia_Renewal_procedure.pdf" download>Download</a></div>
                  </td>
                  <td>
                    <div className="button"><a href="Credentials/CompTia_Renewal_procedure.pdf" target="_blank">Preview</a></div>
                  </td>
                </tr>
              </table>
            </div>


              </div>
            <div className="service-grid-item2">
            <h1 className="h25" Style="border-bottom-style: none;">Downloadable files</h1>
            <div>
              <h2>Capability Statement</h2>
              <table className="buttoncenter tight">
                <tr>
                  <td>
                    <div className="button"><a href="KST Capability Statement 7-9-2018.pdf" download>Download</a></div>
                  </td>
                  <td>
                    <div className="button"><a href="KST Capability Statement 7-9-2018.pdf" target="_blank">Preview</a></div>
                  </td>
                </tr>
              </table>
              </div>
              <div>
              <br></br>
                <h2>Printable Brochure</h2>
                <table className="buttoncenter tight">
                  <tr>
                    <td>
                      <div className="button"><a href="KST Brochure 8-15-2017.pdf" download>Download</a></div>
                    </td>
                    <td>
                      <div className="button"><a href="KST Brochure 8-15-2017.pdf" target="_blank">Preview</a></div>
                    </td>
                  </tr>
                </table>
                </div>
            </div>
          </div>

          </section>
            <img src="/images/mountain3.jpg" alt="mountain" className="bottompic"></img>
          </section>
          </Container>
          </div>
    );
  }
}
