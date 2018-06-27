import React from 'react';
import { Container, Header, Card } from 'semantic-ui-react';
import JobItem from '../components/JobItem';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { defaultJobs } from '../../constants/jobPostings';


class ListJobs extends React.Component {
  render() {
    return (
        <div className="kst-landing-background">
          <Container>
            <Header as="h2" textAlign="center">Job Openings</Header>

            <Card.Group>
              {defaultJobs.map((jobItem, index) =>
                  <JobItem key={index} jobItem={jobItem}/>)}
            </Card.Group>
          </Container>
        </div>
    );
  }
}

export default withRouter (ListJobs);

