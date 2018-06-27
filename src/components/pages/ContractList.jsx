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
          <h1>KST Past and Existing Contracts</h1>
<table className="contractTable">

<tr>

<td></td>
<td>Contract &amp; Description</td>
<td>Location</td>
<td  >Contract No.</td>
</tr>
<tr>
<td></td>
<td>Education Ctr Lousiana</td>
<td>Barksdale AFB, LO</td>
<td>FA4608-17-F-0002</td>
</tr>
<tr>
<td></td>
<td>Holloman BTS</td>
<td>Holloman NM</td>
<td>FA4801-17-D-0002</td>
</tr>
<tr>
<td></td>
<td>Network Control Center</td>
<td>Nellis AFB, NV</td>
<td>FA4861-06-C-B002</td>
</tr>
<tr>
<td></td>
<td>JWICS IT Support</td>
<td>Nellis AFB, NV</td>
<td>FA4861-07-C-C001</td>
</tr>
<tr>
<td></td>
<td>MOFH IT Support</td>
<td>Nellis AFB, NV</td>
<td>FA4861-10-C-B003</td>
</tr>
<tr>
<td></td>
<td>Green Flag</td>
<td>Nellis AFB, NV</td>
<td>FA4861-10-C-C003</td>
</tr>
<tr>
<td></td>
<td>Oahu Telecom Support</td>
<td>Oahu Air Bases</td>
<td>FA5215-05-D-3001</td>
</tr>
<tr>
<td></td>
<td>Inside Plant Services</td>
<td>JBPHH, HI</td>
<td>FA5215-15-C-0012</td>
</tr>
<tr>
<td></td>
<td>Functional System Admin</td>
<td>Hickam AFB, HI</td>
<td>FA5215-16-C-0006</td>
</tr>
<tr>
<td></td>
<td>NETCENTS-2 Small Business<span styles='display:none'>s<span
styles='mso-spacerun:yes'> </span></span></td>
<td>World-wide</td>
<td>FA8732-14-D-0021<span
styles='mso-spacerun:yes'> </span></td>
</tr>
<tr height="24" styles='mso-height-source:userset;height:18.0pt'>
<td height="24" align="right" styles='height:18.0pt'></td>
<td>NETCENTS-2 Open<span styles='mso-spacerun:yes'> </span></td>
<td>World-wide</td>
<td  >FA877109R0019</td>
</tr>
<tr height="24" styles='mso-height-source:userset;height:18.0pt'>
<td height="24" align="right" styles='height:18.0pt'></td>
<td>O&amp;M BTS</td>
<td>Laughlin AFB, TX</td>
<td>FA8773-12-D-0005</td>
</tr>
<tr>
<td></td>
<td>Regional IT Support</td>
<td>JBPHH, HI/Pt Hueneme, CA</td>
<td>GS09Q10DFM0555</td>
</tr>
<tr>
<td></td>
<td>Tactical Comm II</td>
<td>Port Hueneme, CA</td>
<td>GS09Q11DFM0501</td>
</tr>
<tr>
<td></td>
<td>Global IT Support</td>
<td>JBPHH, HI/Pt Hueneme, CA</td>
<td>GS09Q11DFM0548</td>
</tr>
<tr>
<td></td>
<td>NECCPAC Regional</td>
<td>JBPHH, HI/Pt Hueneme, CA</td>
<td>GS09Q14BHP0002</td>
</tr>
<tr>
<td></td>
<td>NMCI Program Support</td>
<td>JBPHH, HI</td>
<td  >GS09T12BHP0004</td>
</tr>
<tr>
<td></td>
<td>Telecom Support</td>
<td>Gulfport, MS</td>
<td>N00189-14-P-0445</td>
</tr>
<tr>
<td></td>
<td>TAC COMM0</td>
<td>Port Hueneme, CA</td>
<td>N00244-16-P-0596</td>
</tr>
<tr>
<td></td>
<td>USPACOM EAS Support</td>
<td>Camp Smith, HI</td>
<td>N00604-10-P-3060</td>
</tr>
<tr>
<td></td>
<td>Telcom Svs Support JBPHH</td>
<td>JBPHH, HI</td>
<td>N00604-11-P-3274</td>
</tr>
<tr>
<td></td>
<td>REGIONAL&nbsp;DISPATCH&nbsp;</td>
<td>CDR&nbsp;NAVY&nbsp;REGION&nbsp;</td>
<td>N00604-14-P-3498<span
styles='mso-spacerun:yes'> </span></td>
</tr>
<tr>
<td ></td>
<td>NECCPAC Global IT</td>
<td>JBPHH, HI/Pt Hueneme, CA</td>
<td>N00604-14-P-3524</td>
</tr>
<tr>
<td></td>
<td>NAVSUP Admin/Code 200</td>
<td>JBPHH, HI</td>
<td>N00604-14-P-3533</td>
</tr>
<tr>
<td></td>
<td>NAVSUP Admin/Code 440</td>
<td>JBPHH, HI</td>
<td>N00604-14-P-3540</td>
</tr>
<tr>
<td></td>
<td>Hickam Mail Ctr</td>
<td>JBPHH, HI</td>
<td>N00604-15-P-3040</td>
</tr>
<tr>
<td></td>
<td>COMPACFLT Admin</td>
<td>JBPHH, HI</td>
<td>N00604-15-P-3135</td>
</tr>
<tr>
<td></td>
<td>NAVFAC Admin</td>
<td>JBPHH, HI</td>
<td>N00604-15-P-3153</td>
</tr>
<tr>
<td></td>
<td>Ford Island Admin</td>
<td>Ford Island, HI</td>
<td>N00604-15-P-3194</td>
</tr>
<tr>
<td></td>
<td>COMPACFLT HR</td>
<td>JBPHH, HI</td>
<td>N00604-15-P-3204</td>
</tr>
<tr>
<td></td>
<td>NECCPAC IT/Financial Mgmt</td>
<td>Multiple Locations:  JBPHH, HI <br></br> Port Hueneme, CA</td>
<td>N00604-15-P-3232</td>
</tr>
<tr>
<td></td>
<td>HSC Admin</td>
<td>JBPHH, HI</td>
<td>N00604-15-P-3343</td>
</tr>
<tr>
<td></td>
<td>Pearl Harbor Mail Center</td>
<td>JBPHH, HI</td>
<td>N00604-15-P-3424</td>
</tr>
<tr>
<td></td>
<td>Guam Warehouse/Comm</td>
<td>Camp Covington, Guam</td>
<td>N00604-15-P-3427</td>
</tr>
<tr>
<td></td>
<td>CTF-75 IT Support</td>
<td>Camp Covington, Guam</td>
<td>N00604-16-P-3041</td>
</tr>
<tr height="37" styles='mso-height-source:userset;height:27.75pt'>
<td height="37" styles='height:27.75pt'></td>
<td>IT &amp; Tac Comm</td>
<td>Port Hueneme, CA</td>
<td>N00604-16-P-3103</td>
</tr>
<tr height="26" styles='mso-height-source:userset;height:19.5pt'>
<td height="26" align="right" styles='height:19.5pt'></td>
<td>Adm Svcs NAVSUP Log Ctr 200</td>
<td>Pearl Harbor</td>
<td>N00604-16-P-3309</td>
</tr>
<tr height="28" styles='mso-height-source:userset;height:21.0pt'>
<td height="28" align="right" styles='height:21.0pt'></td>
<td>JIATC-West Camp Smith</td>
<td>Camp Smith, HI</td>
<td>N00604-16-P-3401</td>
</tr>
<tr>
<td></td>
<td>NECCPAC</td>
<td>PEARL HARBOR HI</td>
<td>N00604-17-P-3021</td>
</tr>
<tr>
<td></td>
<td>COMPACFLEET 1 Adm FTE</td>
<td>Pearl Harbor HI</td>
<td>N00604-17-P-4020</td>
</tr>
<tr>
<td></td>
<td>Admin Spt Svc Naval Facilities Eng Cmd Hawaii</td>
<td>Pearl Harbor HI</td>
<td>N00604-17-P-4031</td>
</tr>
<tr>
<td></td>
<td>Task Order No. 0001</td>
<td></td>
<td>NETOPS-2015-DSIS</td>
</tr>
<tr>
<td></td>
<td>OTSG IT Services</td>
<td>Falls Church, VA</td>
<td>W9124J-13-C-0017</td>
</tr>
<tr>
<td></td>
<td>USARPAC Engineering Spt</td>
<td>Fort Shafter, HI</td>
<td>W912CN-08-C-0106</td>
</tr>
<tr>
<td></td>
<td>Help Desk Support</td>
<td>Tripler Army Medical Center</td>
<td  >W912CN14F0007</td>
</tr>
<tr>
<td></td>
<td>CCTV Maintenance</td>
<td>US Army Garrison, HI</td>
<td  >W912CN-15-D-0021</td>
</tr>
<tr>
<td></td>
<td>DLAN/LAN Installation</td>
<td>Hawaii and Pacific Countries</td>
<td>W912CN-16-A-0011</td>
</tr>
<tr>
<td></td>
<td>Telecom &amp; Audio Visual</td>
<td>Fort Rucker, AL</td>
<td>W91QUZ-06-D-0012</td>
</tr>
</table>
          </section>
          </section>
          </Container>
          </div>
    );
  }
}
