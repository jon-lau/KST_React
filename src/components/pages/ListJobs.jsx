import React from 'react';
import { Container, Header, Card, Grid } from 'semantic-ui-react';
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
            <Grid columns={1} centered>
            <Card.Group centered>
              {defaultJobs.map((jobItem, index) =>
                  <JobItem key={index} jobItem={jobItem}/>)}
            </Card.Group>
            </Grid>
          </Container>
        </div>
    );
  }
}

export default withRouter (ListJobs);

