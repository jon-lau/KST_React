import React from 'react';
import { Container, Card, Message, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class JobItem extends React.Component {
  render() {
    return (
        <Card centered>
          <Card.Content>
            <Container>
            <Header as='h2'>
              {this.props.jobItem.title}
            </Header>
            <Card.Meta>
              <span>
                {this.props.jobItem.location}
              </span>
            </Card.Meta>
            <Header as='h4'>Job Summary</Header>
            <Card.Description>
              {this.props.jobItem.summary}
            </Card.Description>
            <Header as='h4'>Job Certifications</Header>
            <Container className="certificationContainer">
            <Message.List>
              {this.props.jobItem.certifications.map((certification, index) =>
                  <Message.Item key={index} className="certificationStyle" certificaiton={certification}>{certification}</Message.Item>)}
            </Message.List>
            </Container>
            </Container>
          </Card.Content>
        </Card>
//         <Card className="jobPost">

//                   <a href="jobpost20.html"><h1>
//                     Network Administrator
//                   </h1>(Click for More Info)</a>
//                   <div class="jobPostContent">
//                   <Container>
//                     <p>Location:</p>
//                     <p>Joint Base Pearl Harbor/Hickam Hawaii</p>
//                     <br></br>
//                     <p>Summary:</p>
//                     <p>
//                     &emsp;Ka’ala Systems Technology Corp. is in need of a Network Administrator to support the Defense
// Logistics Agency (DLA) by providing IT support services for DLA personnel at Joint Base Pearl
// Harbor Hickam, and remotely for other DLA personnel within the region. Prior Military
// Network Administrator experience is desirable.
//                     </p>

//                     <br></br>
//                     <p>Basic Qualifications:</p>
//                     <ul>
//                       <li>BS degree in an information technology related field, or 5 years of progressive
// Information Technology experience, and at least two projects in technical areas. At least
// one project shall have occurred within the past three years.
//                       </li>
//                       <li>IT-I Level qualified
//                       </li>
//                       <li>IAT-I Level qualified
//                       </li>
//                       <li>CompTIA Security + (CE) or the equivalent IAW DoD 8570
//                       </li>
//                       <li>Computing Environment Certification: CCNA (or higher) certifications
//                       </li>
//                       <li>Valid driver’s license
//                       </li>
//                       <li>Active Department of Defense Secret Clearance
//                       </li>
//                       <li>US citizenship
//                       </li>
//                     </ul>
//                     <br></br>
//                   </Container>                    
//                   </div>
//                 </Card>
    );
  }
}

/** Require a document to be passed to this component. */
JobItem.propTypes = {
  jobItem: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(JobItem);
