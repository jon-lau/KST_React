import React from 'react';
import { Container, Card, Message, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, NavLink, Link } from 'react-router-dom';

class JobItem extends React.Component {
  render() {
    return (
      <Card className="jobCard">
        <div className="jobPost">

          <Link style={{ color: 'blue' }} to={`/jobpost/${this.props.jobItem.url}`}><h1>
            {this.props.jobItem.title}
          </h1></Link>
          <Link style={{ color: 'blue' }} to={`/jobpost/${this.props.jobItem.url}`}>(Click for More Info)</Link>
          <div class="jobPostContent">
            <Container>
              <p>Location:</p>
              <p>{this.props.jobItem.location}</p>
              <br></br>
              <p>Summary:</p>
              <p>
                &emsp;{this.props.jobItem.summary}
              </p>
              <br></br>
              <Container className="certificationContainer">
                <ul>
                  {this.props.jobItem.certifications.map((certification, index) =>
                    <li key={index} className="certificationStyle" certificaiton={certification}>{certification}</li>)}
                </ul>
              </Container>
              <br></br>
            </Container>
          </div>
        </div>
      </Card>
    );
  }
}

/** Require a document to be passed to this component. */
JobItem.propTypes = {
  jobItem: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(JobItem);
