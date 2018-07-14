import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { defaultJobs } from '../../constants/jobPostings';

/** Renders the Page for editing a single document. */
class JobPost extends React.Component {
  
  render() {
    const url = this.props.match.params.url;
    const post = defaultJobs.find(function(element) {return element.url === url});
    return (
      <div className="kst-landing-background">
      <Container>
        <section class="mainboxHome">

<section class="content jobpost">
  <section>
    <h1>{post.title}
    </h1>
    <br></br>&emsp;{post.description}
    <br></br><br></br><div >General Duties:</div>
    {post.generalDuties}
    <br></br><br></br>
    <h2>Skills:</h2>
    <br></br>
    <ul class="booleanlist">
{post.skills.map((skill, index) =>
  <li key={index} skill={skill}>{skill}</li>)}
    </ul>
    <br></br>
    <h2>Preferred Requirements:</h2>
    <br></br>
    <ul class="booleanlist">
{post.preferred.map((preferred, index) =>
  <li key={index} preferred={preferred}>{preferred}</li>)}
    </ul><br></br>
    <br></br>
    <h2>Mandatory Requirements:</h2>
    <br></br>
    <ul class="booleanlist">
{post.mandatory.map((mandatory, index) =>
  <li key={index} mandatory={mandatory}>{mandatory}</li>)}
    </ul><br></br>
    <p class="footnote">
      Ka’ala Systems Technology Corp. is committed to hiring and retaining a diverse workforce. We
are proud to be an Equal Opportunity/Affirmative Action Employer, making decisions without
regard to race, color, religion, creed, sex, sexual orientation, gender identity, marital status,
national origin, age, veteran status, disability, or any other protected class. For our complete
EEO/AA. U.S. Citizenship is required for this position.
      <br></br><br></br>
      If you are interested please apply and/or call 808-521-7000
    </p>
    <br></br>


    <div class="button">KST "Application for Employment" Forms</div>

  </section>
  <img src="/images/mountain3.jpg" alt="mountain" className="bottompic"></img></section>
</section>
      </Container>
    </div>
    );
  }
}


export default withRouter (JobPost);
