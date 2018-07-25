import React from 'react';
import { Container } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
/** Renders the Page for editing a single document. */
/** ref anchors aren't working, first and last links have been altered on send and recieve**/
export default class Services extends React.Component {

  render() {

    return (
      <div className="kst-landing-background">
      <Container>
          <section className="content Service">
            <section>
              <h1 styles="border-bottom-style: none; text-align: center;">KST’s Primary Services by NAICS Codes</h1>
              <br></br><br></br>
              <img src="images/TestBanner2.jpg" alt="NAICS Banner" className="contentImage"></img>
              <br></br>
              <div className="TableContents">
                <h2>NAICS Code Table</h2>
                <Link to="#Service517919">517919 All Other Telecommunications</Link><br></br>
                <Link to="#Service541512">541512 Computer Systems Design Services</Link><br></br>
                <Link to="#Service541513">541513 Computer Facilities Management Services</Link><br></br>
                <Link to="#Service541519">541519 Other Computer Related Services</Link><br></br>
                <Link to="#Service541618">541618 Other Management Consulting Services</Link><br></br>
                <Link to="#Service517311">517311 Wired Telecommunications Carriers</Link><br></br>
                <Link to="#Service541330">541330 Engineering Services</Link><br></br>
                <Link to="#Service541511">541511 Custom Computer Programming Services</Link><br></br>
                <Link to="#Service541990">541990 All Other Professional, Scientific, and Technical Services</Link><br></br>
                <Link to="#Service561110">561110 Office Administrative Services</Link><br></br>
                <Link to="#Service561320">561320 Temporary Help Services</Link><br></br>
                <Link to="#Service561421">561421 Telephone Answering Services</Link><br></br>
                <Link to="#Service561621">561621 Security Systems Services (except Locksmiths)</Link><br></br>
                <Link to="#Service811213">811213 Communication Equipment Repair and Maintenance</Link><br></br>
              </div>
              <br></br><br></br>

              <h2 id="Service517919">517919 All Other Telecommunications</h2>
              <br></br>
              This U.S. industry comprises establishments primarily engaged in providing specialized telecommunications services, such as satellite tracking, communications telemetry, and radar station operation. This industry also includes establishments primarily engaged in providing satellite terminal stations and associated facilities connected with one or more terrestrial systems and capable of transmitting telecommunications to, and receiving telecommunications from, satellite systems. Establishments providing Internet services or voice over Internet protocol (VoIP) services via client-supplied telecommunications connections are also included in this industry.
              <br></br><br></br>

              <h2 id="Service541512">541512 Computer Systems Design Services</h2>
              <br></br>
              This U.S. industry comprises establishments primarily engaged in planning and designing computer systems that integrate computer hardware, software, and communication technologies. The hardware and software components of the system may be provided by this establishment or company as part of integrated services or may be provided by third parties or vendors. These establishments often install the system and train and support users of the system.
              <br></br><br></br>

              <h2 id="Service541513">541513 Computer Facilities Management Services</h2>
              <br></br>
              This U.S. industry comprises establishments primarily engaged in providing on-site management and operation of clients' computer systems and/or data processing facilities. Establishments providing computer systems or data processing facilities support services are included in this industry.
              <br></br><br></br>


              <h2 id="Service541519">541519 Other Computer Related Services</h2>
              <br></br>
              This U.S. industry comprises establishments primarily engaged in providing computer related services (except custom programming, systems integration design, and facilities management services). Establishments providing computer disaster recovery services or software installation services are included in this industry.
              <br></br><br></br>

              <h2 id="Service541618">541618 Other Management Consulting Services</h2>
              <br></br>
              This U.S. industry comprises establishments primarily engaged in providing management consulting services (except administrative and general management consulting; human resources consulting; marketing consulting; or process, physical distribution, and logistics consulting). Establishments providing telecommunications or utilities management consulting services are included in this industry.
              <br></br><br></br>

              <h2 id="Service517311">517311 Wired Telecommunications Carriers</h2>
              <br></br>
              This U.S. industry comprises establishments primarily engaged in operating and/or providing access to transmission facilities and infrastructure that they own and/or lease for the transmission of voice, data, text, sound, and video using wired telecommunications networks. Transmission facilities may be based on a single technology or a combination of technologies. Establishments in this industry use the wired telecommunications network facilities that they operate to provide a variety of services, such as wired telephony services, including VoIP services; wired (cable) audio and video programming distribution; and wired broadband Internet services. By exception, establishments providing satellite television distribution services using facilities and infrastructure that they operate are included in this industry.
              <br></br><br></br>

              <h2 id="Service541330">541330 Engineering Services</h2>
              <br></br>
              This industry comprises establishments primarily engaged in applying physical laws and principles of engineering in the design, development, and utilization of machines, materials, instruments, structures, processes, and systems. The assignments undertaken by these establishments may involve any of the following activities: provision of advice, preparation of feasibility studies, preparation of preliminary and final plans and designs, provision of technical services during the construction or installation phase, inspection and evaluation of engineering projects, and related services.
              <br></br><br></br>

              <h2 id="Service541511">541511 Custom Computer Programming Services</h2>
              <br></br>
              This U.S. industry comprises establishments primarily engaged in writing, modifying, testing, and supporting software to meet the needs of a particular customer.
              <br></br><br></br>

              <h2 id="Service541990">541990 All Other Professional, Scientific, and Technical Services</h2>
              <br></br>
              This industry comprises establishments primarily engaged in the provision of professional, scientific, or technical services (except legal services; accounting, tax preparation, bookkeeping, and related services; architectural, engineering, and related services; specialized design services; computer systems design and related services; management, scientific, and technical consulting services; scientific research and development services; advertising, public relations, and related services; market research and public opinion polling; photographic services; translation and interpretation services; and veterinary services).
              <br></br><br></br>

              <h2 id="Service561110">561110 Office Administrative Services</h2>
              <br></br>
              This industry comprises establishments primarily engaged in providing a range of day-to-day office administrative services, such as financial planning; billing and recordkeeping; personnel; and physical distribution and logistics, for others on a contract or fee basis. These establishments do not provide operating staff to carry out the complete operations of a business.
              <br></br><br></br>

              <h2 id="Service561320">561320 Temporary Help Services</h2>
              <br></br>
              This industry comprises establishments primarily engaged in supplying workers to clients' businesses for limited periods of time to supplement the working force of the client. The individuals provided are employees of the temporary help services establishment. However, these establishments do not provide direct supervision of their employees at the clients' work sites.
              <br></br><br></br>

              <h2 id="Service561421">561421 Telephone Answering Services</h2>
              <br></br>
              This U.S. industry comprises establishments primarily engaged in answering telephone calls and relaying messages to clients.
              <br></br><br></br>

              <h2 id="Service561621">561621 Security Systems Services (except Locksmiths)</h2>
              <br></br>
              This U.S. industry comprises establishments primarily engaged in (1) selling security alarm systems, such as burglar and fire alarms, along with installation, repair, or monitoring services or (2) remote monitoring of electronic security alarm systems.
              <br></br><br></br>

              <h2 id="Service811213">811213 Communication Equipment Repair and Maintenance</h2>
              <br></br>
              This U.S. industry comprises establishments primarily engaged in repairing and maintaining communication equipment without retailing new communication equipment, such as telephones, fax machines, communications transmission equipment, and two-way radios.
              <br></br><br></br>

            </section>
            <img src="/images/mountain3.jpg" alt="mountain" className="bottompic"></img>
          </section>
          </Container>
          </div>
    );
  }
}
